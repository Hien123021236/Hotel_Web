using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Hotel_Web.Areas.Receptionists.Models;
using Hotel_Web.Areas.Receptionists.Data;
using System.Collections;

namespace Hotel_Web.Areas.Receptionists.Controllers
{
    [Area("Receptionists")]
    public class StatisticsController : Controller
    {   
        public IActionResult Index()
        {
            if (!Authentication.AuthenticateByCookie(HttpContext))
                return Redirect("/Receptionists/Authentication/Login?are=Receptionists&ctrl=Statistics&act=Index");

            return View();
        }

        [HttpPost]
        public JsonResult ReportYear(int year)
        {
            return Json(StatisticDA0.GetRevenueMonths(year));
        }

        public IActionResult ReportTable()
        {
            if (!Authentication.AuthenticateByCookie(HttpContext))
                return Redirect("/Receptionists/Authentication/Login?are=Receptionists&ctrl=Statistics&act=ReportTable");

            List<ReportModel> list = StatisticDA0.GetAllAmountInMonthOfYear();
            return View(list);
        }

    }
}