using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Guests.Models
{
    public class Payment
    {
        public string PaymentID { get; set; }
        public string CardName { get; set; }
        public string CardNumber { get; set; }
        public string Month { get; set; }
        public string Year { get; set; }
        public string CVC { get; set; }
        public string TotalAmountPayment { get; set; }
    }
}
