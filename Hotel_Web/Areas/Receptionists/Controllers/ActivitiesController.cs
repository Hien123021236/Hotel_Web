using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hotel_Web.Areas.Receptionists.Data;
using Hotel_Web.Areas.Receptionists.Models;
using Hotel_Web.Areas.Receptionists.Models.Activities;
using Microsoft.AspNetCore.Mvc;

namespace Hotel_Web.Areas.Receptionists.Controllers
{
    public class ActivitiesController : Controller
    {
        [Area("Receptionists")]
        public IActionResult Index()
        {
            if (!Authentication.AuthenticateByCookie(HttpContext))
                return Redirect("/Receptionists/Authentication/Login?are=Receptionists&ctrl=Activities&act=Index");

            BookingDAO.Update();

            ActivitiesViewModel model = ActivitiesDAO.GetActivitiesViewModel();

            return View(model);
        }


        [Area("Receptionists")]
        public IActionResult Checkin(int id, bool isEdit = true)
        {
            if (!Authentication.AuthenticateByCookie(HttpContext))
                return Redirect("/Receptionists/Authentication/Login?are=Receptionists&ctrl=Activities&act=Index");

            ViewBag.isEdit = isEdit;
            BookingModel model = BookingDAO.GetBookingModel(id);
            
            if(StayDAO.GetALLGuestsOfBooking(id).Count == 0)
            {
                StayDAO.InsertStay(new Stay()
                {
                    BookingID = model.BookingID,
                    Status = null,
                    FromDate = DateTime.Now,
                    GuestID = model.Guest.GuestID,
                    ToDate = null
                });
            }
            
            return View(model);
        }

        [Area("Receptionists")]
        public IActionResult Checkout(int id , bool isEdit = true)
        {
            if (!Authentication.AuthenticateByCookie(HttpContext))
                return Redirect("/Receptionists/Authentication/Login?are=Receptionists&ctrl=Activities&act=Index");

            ViewBag.isEdit = isEdit;
            BookingModel model = BookingDAO.GetBookingModel(id);
            return View(model);
        }


        [Area("Receptionists")]
        [HttpPost]
        public IActionResult ConfirmCheckin(int bookingId, int extraChange)
        {

            return Json(BookingDAO.ConfirmBooking(bookingId,extraChange));
        }

        [Area("Receptionists")]
        [HttpPost]
        public IActionResult ConfirmCheckOut(int bookingId , int extraChange)
        {
            return Json(BookingDAO.ConfirmCheckOut(bookingId, extraChange));
        }

        [Area("Receptionists")]
        [HttpPost]
        public IActionResult CancelCheckin(int bookingId)
        {
            return Json(StayDAO.DeleteStayOfBooking(bookingId));
        }

        [Area("Receptionists")]
        [HttpPost]
        public IActionResult AddGuestOnCheckin(string FullName, string Gender, string IdCard ,int bookingid)
        {
            if (!GuestDAO.CheckIsExistGuestByIdCard(IdCard))
            {
                var guestid = GuestDAO.InsertGuest(new Guest() { 
                    FullName = FullName,
                    Gender=Gender,
                    IDCardNumber=IdCard
                });

                var stay = StayDAO.InsertStay(new Stay(){
                    GuestID = guestid,
                    BookingID = bookingid,
                    FromDate = DateTime.Now,
                    ToDate =null
                });

                return Json(stay);
            }
            else
            {
                var guestid = GuestDAO.GetGuestByIdCardNumber(IdCard).GuestID;
                if (!StayDAO.CheckGuestStaying(guestid))
                {
                    var stay = StayDAO.InsertStay(new Stay()
                    {
                        GuestID = guestid,
                        BookingID = bookingid,
                        FromDate = DateTime.Now,
                        ToDate = null
                    });

                    return Json(stay);
                }
                else
                {
                    return Json(null);
                }
            }
        }

        [Area("Receptionists")]
        [HttpPost]
        public IActionResult DeleteStayOnCheckin(int stayId)
        {
            return Json(StayDAO.DeleteStay(stayId));
        }
    }
}