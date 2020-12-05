using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Hotel_Web.Areas.Guests.Controllers
{
    public class DetailController : Controller
    {
        [Area("Guests")]
        public IActionResult RoomsDetail()
        {
            return View();
        }
        [Area("Guests")]
        public IActionResult SpaDetail()
        {
            return View();
        }
        [Area("Guests")]
        public IActionResult DiningDetail()
        {
            return View();
        }
        [Area("Guests")]
        public IActionResult ServiceDetail()
        {
            return View();
        }
        [Area("Guests")]
        public IActionResult TourDetail()
        {
            return View();
        }
    }
}
