using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hotel_Web.Areas.Receptionists.Data;
using Hotel_Web.Areas.Receptionists.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hotel_Web.Areas.Receptionists.Controllers
{
    public class AuthenticationController : Controller
    {
        [Area("Receptionists")]
        public IActionResult Login(Path path)
        {
            return View(path);
        }



        [Area("Receptionists")]
        public IActionResult Check(int staffID, string password , Path path)
        {
            if (StaffDA0.CheckLoginAccess(staffID, password))
            {
                //khởi tạo cookie cho browser
                CookieOptions cookie = new CookieOptions();
                cookie.Expires = DateTime.Now.AddMilliseconds(3600000);
                Response.Cookies.Append("staffid", staffID.ToString(), cookie);
                Response.Cookies.Append("password", password, cookie);

                if (path.Ctrl != null)
                    return Redirect(path.ToString());
                else
                    return Redirect("/Receptionists/Rooms");

            }
            else
            {
                return Redirect("/Receptionists/Login");
            }
        }



        [Area("Receptionists")]
        public IActionResult Logout()
        {
            CookieOptions cookie = new CookieOptions();
            cookie.Expires = DateTime.Now.AddSeconds(-1);
            Response.Cookies.Append("staffid", "", cookie);
            Response.Cookies.Append("password", "", cookie);
            
            return Redirect("/Receptionists/Authentication/Login");
        }
    }
}