using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hotel_Web.Areas.Receptionists.Data;
using Hotel_Web.Areas.Receptionists.Models;
using Microsoft.AspNetCore.Mvc;

namespace Hotel_Web.Areas.Receptionists.Controllers
{
    public class BookingsController : Controller
    {
        //[Area("Receptionists")]
        //public IActionResult Index()
        //{
        //    if (!Authentication.AuthenticateByCookie(HttpContext))
        //        return Redirect("/Receptionists/Authentication/Login?are=Receptionists&ctrl=Bookings&act=Index");

        //    return View();
        //}

        [Area("Receptionists")]
        public IActionResult Index(DateTime fromdate, DateTime todate)
        {
            if (!Authentication.AuthenticateByCookie(HttpContext))
                return Redirect("/Receptionists/Authentication/Login?are=Receptionists&ctrl=Bookings&act=Index");
           
            BookingDAO.Update();

            if (fromdate==DateTime.MinValue || todate == DateTime.MinValue)
            {
                fromdate = DateTime.Now.AddDays(-30);
                todate = DateTime.Now.AddDays(30);
            }

            List<BookingModel> list = BookingDAO.GetBookingsViewModel(fromdate, todate);

            return View(list);
        }
    }
}