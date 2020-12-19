using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hotel_Web.Areas.Receptionists.Data;
using Microsoft.AspNetCore.Mvc;
using Hotel_Web.Areas.Receptionists.Models;

namespace Hotel_Web.Areas.Receptionists.Controllers
{
    [Area("Receptionists")]
    public class GuestsController : Controller
    {

        public IActionResult Index()
        {
            if (!Authentication.AuthenticateByCookie(HttpContext))
                return Redirect("/Receptionists/Authentication/Login?are=Receptionists&ctrl=Guests&act=Index");

            List<Guest> list = GuestDAO.GetAllGuests();
            
            return View(list);
        }

        [HttpPost]
        public IActionResult GetByIdCardNumber(string idcardnumber)
        {
            return Json(Hotel_Web.Areas.Receptionists.Data.GuestDAO.GetGuestByIdCardNumber(idcardnumber));
        }

        [HttpPost]
        public IActionResult GetById(int id)
        {
            return Json(Hotel_Web.Areas.Receptionists.Data.GuestDAO.GetGuest(id));
        }

        [HttpPost]
        public IActionResult UpdateGuest(Guest guest)
        {
            GuestDAO.UpdateGuest(guest);
            return Json(guest.GuestID);
        }
    }
}