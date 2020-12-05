using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Guests.Models
{
    public class RoomTypeModel
    {
        public int RoomTypeID { get; set; }
        public RoomStyle RoomStyle { get; set; }
        public RoomSize RoomSize { get; set; }
        public int Price { get; set; }
        public string Description { get; set; }
    }
}
