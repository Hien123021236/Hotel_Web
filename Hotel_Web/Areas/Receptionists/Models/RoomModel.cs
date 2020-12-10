using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Models
{
    public class RoomStatuses{
        public static string Empty = "Empty";
        public static string Reserved = "Reserved";
        public static string Occupied = "Occupied";
        public static string Stayover = "Stayover";
    }
    public class RoomModel
    {
        public int RoomID { get; set; }
        public RoomTypeModel RoomType { get; set; }
        public string Status { get; set; }
    }
}
