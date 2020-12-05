using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Hotel_Web.Areas.Guests.Controllers
{
    public class ToursController : Controller
    {
        [Area("Guests")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
