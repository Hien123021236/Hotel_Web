using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Hotel_Web.Areas.Guests.Controllers
{
    public class ContactUsController : Controller
    {
        [Area("Guest")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
