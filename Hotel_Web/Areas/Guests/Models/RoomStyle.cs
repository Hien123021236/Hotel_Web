using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Guests.Models
{
    public class RoomStyle
    {
        public int RoomStyleID { get; set; }
        public string RoomStyleName { get; set; }
        public string RoomStyleShortName { get; set; }
        public string Description { get; set; }
    }
}
