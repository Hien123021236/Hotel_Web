using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hotel_Web.Areas.Guests.Data;
using Microsoft.AspNetCore.Mvc;

namespace Hotel_Web.Areas.Guests.Controllers
{
    public class RoomsController : Controller
    {
        [Area("Guests")]
        public IActionResult Index()
        {
            ViewData.Model = RoomTypeDAO.GetAllRoomTypeModel();
            var list = RoomTypeDAO.GetAllRoomTypeModel();
            return View();
        }

    }
}
