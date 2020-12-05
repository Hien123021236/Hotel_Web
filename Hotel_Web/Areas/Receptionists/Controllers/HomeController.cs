using System;
using System.Linq;
using Hotel_Web.Areas.Receptionists.Models;
using Hotel_Web.Areas.Receptionists.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hotel_Web.Areas.Receptionists.Controllers
{
    public class HomeController : Controller
    {
        [Area("Receptionists")]
        public IActionResult Index()
        {
            return Redirect("Receptionists/Authentication/Login");
        }

    }
}