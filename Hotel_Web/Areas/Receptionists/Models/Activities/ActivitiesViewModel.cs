using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Models.Activities
{
    public class ActivitiesViewModel
    {
        public int EmptyRoomsCount { get; set; }
        public int OccupiedRoomsCount { get; set; }

        public List<BookingModel> ListCheckIn { get; set; }
        public List<BookingModel> ListCheckOut { get; set; }

    }
}
