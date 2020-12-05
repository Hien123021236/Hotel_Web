using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Models.Rooms
{
    public class RoomViewModel
    {
        public int RoomID { get; set; }
        public RoomTypeModel RoomType { get; set; }
        public string Status { get; set; }
        public List<Guest> Guests { get; set; } 
        public TimeSpan RemainingTime { get; set; }

    }
}
