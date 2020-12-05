using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Guests.Models
{
    public class RoomModel
    {
        public int RoomID { get; set; }
        public RoomTypeModel RoomType { get; set; }
        public string Status { get; set; }
    }
}
