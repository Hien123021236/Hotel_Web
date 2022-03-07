using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Hotel_Web.Areas.Guests.Data;
using Hotel_Web.Areas.Guests.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;

namespace Hotel_Web.Areas.Guests.Controllers
{
    public class BookingController : Controller
    {
        [Area("Guests")]
        public IActionResult Index(int RoomTypeID)
        {
            ViewData.Model = RoomTypeDAO.GetAllRoomTypeModel();
            ViewBag.RoomTypeID = RoomTypeID;

            return View();
        }



        [Area("Guests")]
        public IActionResult Confirmation(int RoomID, DateTime CheckInDate, DateTime CheckOutDate)
        {
            ViewData.Model = RoomsDAO.GetRoomModel(RoomID);
            ViewBag.CheckInDate = CheckInDate.ToString("MM-dd-yyyy", CultureInfo.InvariantCulture);
            ViewBag.CheckOutDate = CheckOutDate.ToString("MM-dd-yyyy", CultureInfo.InvariantCulture);
            return View();
        }


        [Area("Guests")]
        public IActionResult OnGetPartial() =>
            new PartialViewResult
            {
                ViewName = "_ConfirmEmail",
                ViewData = ViewData,
            };

        [Area("Guests")]
        public async Task<IActionResult> Create(int RoomID, DateTime CheckInDate, DateTime CheckOutDate, Guest guest, Payment payment, int Amount)
        {
            int guestid = GuestDAO.InsertGuest(guest);
            int paymentid = PaymentDAO.InsertPayment(payment);
            int bookingid = BookingDAO.InsertBooking(new Booking()
            {
                RoomID = RoomID,
                CheckInDate = CheckInDate.AddHours(14),
                CheckOutDate = CheckOutDate.AddHours(12).AddMinutes(5),
                GuestID = guestid,
                Amount = (int)(CheckOutDate - CheckInDate).TotalDays * RoomsDAO.GetRoomModel(RoomID).RoomType.Price,
                PaymentID = paymentid,             
            });

            var model = BookingDAO.GetBookingModel(bookingid);
            string body = await Utlities.RenderViewToStringAsync<BookingModel>(this, "~/Areas/Guests/Views/Partial/_ConfirmEmail.cshtml", model);
            MailMessage mail = new MailMessage();
            mail.From = new MailAddress("hien@gmail.com");
            mail.To.Add(guest.Email);
            mail.Subject = "Congratulations on your successful booking";
            mail.Body = body;
            mail.IsBodyHtml = true;

            Utlities.SendEmail(mail);

            return View();
        }

       

        [Area("Guests")]
        [HttpPost]
        public JsonResult Check(int RoomTypeID, DateTime CheckInDate, DateTime CheckOutDate)
        {
            int roomid = RoomsDAO.GetAvailableRoomID(RoomTypeID, CheckInDate, CheckOutDate);

            return Json(new
            {
                roomid = roomid
            });
        }
    }
}