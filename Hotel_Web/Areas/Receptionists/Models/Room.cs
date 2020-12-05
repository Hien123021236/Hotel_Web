using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Models
{
    public class Room
    {
        public int RoomID { get; set; }
        public int RoomTypeID { get; set; }
        public string Status { get; set; }
    }
}
