using Hotel_Web.Areas.Guests.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Guests.Data
{
    public class BookingDAO
    {
        public static int InsertBooking(Booking booking)
        {
            int id = 0;
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    SqlCommand cm = conn.CreateCommand();
                    cm.CommandText = "pro_CreateBooking";
                    cm.CommandType = System.Data.CommandType.StoredProcedure;
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        rs.Read();
                        id = Decimal.ToInt32(rs.GetDecimal(0));
                    }
                    conn.Close();
                    conn.Open();
                    if (id > 0)
                    {
                        string sql = "UPDATE Booking SET GuestID = @guestid, RoomID = @roomid, BookingDate = CURRENT_TIMESTAMP, CheckInDate = @checkindate, CheckOutDate = @checkoutdate, PaymentID = @paymentid, Amount = @amount, Status = 'Confirmed' where BookingID = @bookingid ";
                        cm = new SqlCommand(sql, conn);
                        cm.Parameters.AddWithValue("@bookingid", SqlDbType.Int).Value = id;
                        cm.Parameters.AddWithValue("@guestid", SqlDbType.NVarChar).Value = booking.GuestID; 
                        cm.Parameters.AddWithValue("@roomid", SqlDbType.NVarChar).Value = booking.RoomID;
                        cm.Parameters.AddWithValue("@checkindate", SqlDbType.NVarChar).Value = booking.CheckInDate; 
                        cm.Parameters.AddWithValue("@checkoutdate", SqlDbType.NVarChar).Value = booking.CheckOutDate;
                        cm.Parameters.AddWithValue("@paymentid", SqlDbType.NVarChar).Value = booking.PaymentID;
                        cm.Parameters.AddWithValue("@amount", SqlDbType.Int).Value = booking.Amount;
                        int row = cm.ExecuteNonQuery();

                        if (row > 0) return id;
                    }
                }
            }

            return 0;
        }

        public static BookingModel GetBookingModel(int bookingid)
        {
            BookingModel bk = null;
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "SELECT * FROM dbo.Booking WHERE BookingID = @bookingid";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    cm.Parameters.AddWithValue("@bookingid", bookingid);
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        while (rs.Read())
                        {
                            bk = new BookingModel();
                            bk.BookingID = rs[0] as int? ?? 0;
                            bk.Guest = GuestDAO.GetGuest(rs[1] as int? ?? 0);
                            bk.Room = RoomsDAO.GetRoomModel(rs[2] as int? ?? 0);
                            bk.BookingDate = rs[3] as DateTime? ?? DateTime.MinValue;
                            bk.CancelDate = rs[4] as DateTime? ?? DateTime.MinValue;
                            bk.CheckInDate = rs[5] as DateTime? ?? DateTime.MinValue;
                            bk.CheckOutDate = rs[6] as DateTime? ?? DateTime.MinValue;
                            bk.Payment = PaymentDAO.GetPayment(rs[7] as int? ?? 0);
                            bk.Deposit = rs[8] as int? ?? 0;
                            bk.Amount = rs[9] as int? ?? 0;
                            bk.Status = rs[10] as string;
                        }
                    }
                }
            }
            return bk;
        }

    }
}
