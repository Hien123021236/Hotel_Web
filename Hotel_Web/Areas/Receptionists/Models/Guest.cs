using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Models
{
    public class Guest
    {
        //Infor Customer 
        public int GuestID { get; set; }
        public string FullName { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string IDCardNumber { get; set; }
        public string Country { get; set; }
    }
}
