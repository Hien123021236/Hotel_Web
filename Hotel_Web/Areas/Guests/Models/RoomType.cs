using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Guests.Models
{
    public class RoomType
    {
        public int RoomTypeID { get; set; }
        public int RoomStyleID { get; set; }
        public int RoomSizeID { get; set; }
        public int Price { get; set; }
        public string Description { get; set; }
    }

}
