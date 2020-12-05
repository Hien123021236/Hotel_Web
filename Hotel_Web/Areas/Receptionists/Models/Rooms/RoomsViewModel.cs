using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Models.Rooms
{
    public class RoomsViewModel
    {
        public int EmptyCount { get; set; }
        public int ReservedCount { get; set; }
        public int OccupiedCount { get; set; }
        public int StayoverCount { get; set; }
        public List<RoomStyleViewModel> RoomStyles { get; set; }
        public List<RoomSizeViewModel> RoomSizes { get; set; }
        public List<RoomViewModel> Rooms { get; set; }

        public RoomsViewModel()
        {
            EmptyCount = ReservedCount = OccupiedCount = StayoverCount = 0;
            RoomStyles = new List<RoomStyleViewModel>();
            RoomSizes = new List<RoomSizeViewModel>();
            Rooms = new List<RoomViewModel>();
        }
    }
}
