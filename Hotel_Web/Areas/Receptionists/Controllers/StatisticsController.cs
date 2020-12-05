using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Hotel_Web.Areas.Receptionists.Controllers
{
    public class StatisticsController : Controller
    {
        [Area("Receptionists")]
        public IActionResult Index()
        {
            return View();
        }
    }
}