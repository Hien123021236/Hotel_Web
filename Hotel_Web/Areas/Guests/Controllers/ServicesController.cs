using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Hotel_Web.Areas.Guests.Controllers
{
    public class ServicesController : Controller
    {
        [Area("Guests")]
        public IActionResult Dining()
        {
            return View();
        }
        [Area("Guests")]
        public IActionResult Spa()
        {
            return View();
        }
        [Area("Guests")]
        public IActionResult Tailoring()
        {
            return View(); 
        }
        [Area("Guests")]
        public IActionResult VisaTrasfer()
        {
            return View();
        }
    }
}
