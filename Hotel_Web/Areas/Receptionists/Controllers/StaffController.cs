using Hotel_Web.Areas.Receptionists.Data;
using Hotel_Web.Areas.Receptionists.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Controllers
{
    [Area("Receptionists")]
    public class StaffController : Controller
    {
        public IActionResult Index()
        {
            if (!Authentication.AuthenticateByCookie(HttpContext))
                return Redirect("/Receptionists/Authentication/Login?are=Receptionists&ctrl=Staff&act=Index");
            List<Staff> list = StaffDA0.GetAllStaffs();

            return View(list);
        }

        [HttpPost]
        public IActionResult CheckStaffIsExists(int id)
        {
            if (StaffDA0.CheckIsExistStaffByID(id))
            {
                return Json(true);
            }
            else
            {
                return Json(false);
            }
        }

        [HttpPost]
        public IActionResult CreateStaff(Staff staff)
        {
            if (!StaffDA0.CheckIsExistStaffByID(staff.StaffID))
            {
                StaffDA0.InsertStaff(staff);
                return Json(staff.StaffID);
            }
            else
            {
                return Json(null);
            }
            
        }

        [HttpPost]
        public IActionResult UpdateStaff(Staff staff)
        {
            StaffDA0.UpdateStaff(staff);
            return Json(staff.StaffID);
        }
    }
}
