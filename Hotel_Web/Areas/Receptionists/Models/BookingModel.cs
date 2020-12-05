using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Models
{
    public class BookingModel
    {
        public int BookingID { get; set; }
        public Guest Guest { get; set; }
        public RoomModel Room { get; set; }
        public DateTime BookingDate { get; set; }
        public DateTime CancelDate { get; set; }
        public DateTime CheckInDate { get; set; }
        public DateTime CheckOutDate { get; set; }
        public Payment Payment { get; set; }
        public int Deposit { get; set; }
        public int Amount { get; set; }
        public string Status { get; set; }
    }
}
