using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Models.Rooms
{
    public class RoomsManagerViewModel
    {
        public List<RoomModel> RoomModels { get; set; }
        public List<RoomTypeModel> RoomTypeModels { get; set; }
        public List<RoomStyle> RoomStyles { get; set; }
        public List<RoomSize> RoomSizes { get; set; }
    }
}
