using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Models
{
    public class RoomSize
    {
        public int RoomSizeID { get; set; }
        public string RoomSizeName { get; set; }
        public string RoomSizeShortName { get; set; }
        public int GuestCount { get; set; }
        public string Description { get; set; }
    }
}
