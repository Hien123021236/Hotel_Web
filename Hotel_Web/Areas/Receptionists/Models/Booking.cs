using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using X.PagedList;

namespace Hotel_Web.Areas.Receptionists.Models
{
    public class Booking
    {
        public int BookingID { get; set; }
        public int GuestID { get; set; }
        public int RoomID { get; set; }
        public DateTime BookingDate { get; set; }
        public DateTime CancelDate { get; set; }
        public DateTime CheckInDate { get; set; }
        public DateTime CheckOutDate { get; set; }
        public int PaymentID { get; set; }
        public int Deposit { get; set; }
        public int Amount { get; set; }
        public string Status { get; set; }
    }
}
