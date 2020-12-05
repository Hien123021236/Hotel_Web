using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hotel_Web.Areas.Guests.Models;
using Microsoft.AspNetCore.Mvc;

namespace Hotel_Web.Areas.Receptionists.Controllers
{
    [Area("Receptionists")]
    public class GuestsController : Controller
    {

        public IActionResult Index()
        {
            return View();
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
    }
}