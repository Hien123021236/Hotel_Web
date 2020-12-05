using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Models
{
    public class Stay
    {
        public int? StayID { get; set; }
        public int? BookingID { get; set; }
        public int? GuestID { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public string Status { get; set; } // Comfirmed, null
    }
}
