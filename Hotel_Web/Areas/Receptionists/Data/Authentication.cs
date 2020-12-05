
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using System;

namespace Hotel_Web.Areas.Receptionists.Data
{
    public class Authentication
    {
        public static bool AuthenticateByCookie(HttpContext httpContext)
        {
            string staffid = "0";
            string password = "";
            bool HasStaffID = httpContext.Request.Cookies.TryGetValue("staffid", out staffid);
            bool HasPassword = httpContext.Request.Cookies.TryGetValue("password", out password);

            if (HasPassword && HasStaffID)
                return StaffDA0.CheckLoginAccess(int.Parse(staffid), password);
            else
                return false;
        }
    }
}
