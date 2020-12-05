using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Hotel_Web.Areas.Guests.Data;
using Hotel_Web.Areas.Guests.Models;
using Microsoft.AspNetCore.Mvc;

namespace Hotel_Web.Areas.Guests.Controllers
{
    public class PaymentController : Controller
    {
        [Area("Guests")]
        public IActionResult Index(int RoomID, DateTime CheckInDate, DateTime CheckOutDate)
        {

            ViewBag.CheckInDate = CheckInDate; 
            ViewBag.CheckOutDate = CheckOutDate; 
            ViewBag.CheckInDateFormated = CheckInDate.ToString("MM-dd-yyyy", CultureInfo.InvariantCulture);
            ViewBag.CheckOutDateFormated = CheckOutDate.ToString("MM-dd-yyyy", CultureInfo.InvariantCulture);
            RoomModel rm = RoomsDAO.GetRoomModel(RoomID);
            ViewBag.Room = rm;
            //ViewBag.TotalPrice = (CheckOutDate - CheckInDate).TotalDays * PriceDAO.GetPrice(rm.RoomType.RoomTypeID, rm.OtherType.OtherTypeID);
            return View();
        }


        [Area("Guests")]
        [HttpPost]
        public JsonResult CreateBooking(int RoomID, DateTime CheckInDate, DateTime CheckOutDate, Guest guest, Payment payment)
        {   
            int guestid = GuestDAO.InsertGuest(guest);
            int paymentid = PaymentDAO.InsertPayment(payment);

            Booking booking = new Booking();

            booking.RoomID = RoomID;
            booking.GuestID = guestid;
            booking.PaymentID = paymentid;
            booking.CheckInDate = CheckInDate;
            booking.CheckOutDate = CheckOutDate;

            int bookingid = BookingDAO.InsertBooking(booking);

            return Json(new
            {   
                data = booking
            });
        }



    }
}
