using Hotel_Web.Areas.Receptionists.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Data
{
    public class BookingDAO
    {

        public static Booking GetBooking(int bookingid)
        {
            Booking bk = null;
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
                            bk = new Booking();
                            bk.BookingID = rs[0] as int? ?? 0;
                            bk.GuestID = rs[1] as int? ?? 0;
                            bk.RoomID = rs[2] as int? ?? 0;
                            bk.BookingDate = rs[3] as DateTime? ?? DateTime.MinValue;
                            bk.CancelDate = rs[4] as DateTime? ?? DateTime.MinValue;
                            bk.CheckInDate = rs[5] as DateTime? ?? DateTime.MinValue;
                            bk.CheckOutDate = rs[6] as DateTime? ?? DateTime.MinValue;
                            bk.PaymentID = rs[7] as int? ?? 0;
                            bk.Deposit = rs[8] as int? ?? 0;
                            bk.Amount = rs[9] as int? ?? 0;
                            bk.Status = rs[10] as string;
                        }
                    }
                }
            }
            return bk;
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

        public static List<BookingModel> GetBookingsViewModel(DateTime fromdate, DateTime todate)
        {
            List<BookingModel> list = new List<BookingModel>();
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "SELECT * FROM dbo.Booking WHERE CheckOutDate >= @fromdate and CheckInDate <= @todate";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    cm.Parameters.AddWithValue("@fromdate", fromdate);
                    cm.Parameters.AddWithValue("@todate", todate);
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        while (rs.Read())
                        {
                            BookingModel bk = new BookingModel();

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

                            list.Add(bk);
                        }
                    }
                }
            }
            return list;
        }

        public static Booking GetCurrentBookingOfRoom(int roomid) {
            Booking bk = null;
            using (SqlConnection conn = Connection.GetConnection()) {
                if (conn != null) {
                    string sql = "SELECT * FROM dbo.Booking WHERE RoomID = @roomid AND (Status IN('Checked-In', 'Stayover')OR(CheckInDate <= GETDATE() AND GETDATE() <= CheckOutDate))";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    cm.Parameters.AddWithValue("@roomid", roomid);
                    var rs = cm.ExecuteReader();
                    if (rs.Read())
                    {
                        bk = new Booking();
                        bk.BookingID = rs[0] as int? ?? 0;
                        bk.GuestID = rs[1] as int? ?? 0;
                        bk.RoomID = rs[2] as int? ?? 0;
                        bk.BookingDate = rs[3] as DateTime? ?? DateTime.MinValue;
                        bk.CancelDate = rs[4] as DateTime? ?? DateTime.MinValue;
                        bk.CheckInDate = rs[5] as DateTime? ?? DateTime.MinValue;
                        bk.CheckOutDate = rs[6] as DateTime? ?? DateTime.MinValue;
                        bk.PaymentID = rs[7] as int? ?? 0;
                        bk.Status = rs[8] as string;
                    }
                }
            }
            return bk;
        }




        public static TimeSpan GetRemainingTimeOfBooking(int bookingid)
        {
            TimeSpan time = TimeSpan.Zero;
            Booking bk = GetBooking(bookingid);
            if (bk != null)
            {
                if (bk.Status == "No-Show" || bk.Status == "Checked-In")
                {
                    time = bk.CheckOutDate - DateTime.Now;
                }
                else
                if (bk.Status == "Stayover")
                {
                    time = DateTime.Now - bk.CheckOutDate;
                }
            }
            return time;
        }



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
                        string sql = "UPDATE Booking SET GuestID = @guestid, RoomID = @roomid, BookingDate = CURRENT_TIMESTAMP, CheckInDate = @checkindate, CheckOutDate = @checkoutdate, PaymentID = @paymentid, Status = 'Comfirmed' where BookingID = @bookingid ";
                        cm = new SqlCommand(sql, conn);
                        cm.Parameters.AddWithValue("@bookingid", SqlDbType.Int).Value = id;
                        cm.Parameters.AddWithValue("@guestid", SqlDbType.NVarChar).Value = booking.GuestID;
                        cm.Parameters.AddWithValue("@roomid", SqlDbType.NVarChar).Value = booking.RoomID;
                        cm.Parameters.AddWithValue("@checkindate", SqlDbType.NVarChar).Value = booking.CheckInDate;
                        cm.Parameters.AddWithValue("@checkoutdate", SqlDbType.NVarChar).Value = booking.CheckOutDate;
                        cm.Parameters.AddWithValue("@paymentid", SqlDbType.NVarChar).Value = booking.PaymentID;
                       
                        int row = cm.ExecuteNonQuery();

                        if (row > 0) return id;
                    }
                }
            }

            return 0;
        }

        public static bool ConfirmBooking(int bookingId , int extraChange)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    SqlCommand cm1 = conn.CreateCommand();
                    string sql1 = "UPDATE Booking SET Status = 'Checked-In',Amount = Amount + @extraChange where BookingID = @bookingId ";
                    cm1 = new SqlCommand(sql1, conn);
                    cm1.Parameters.AddWithValue("@bookingId", bookingId);
                    cm1.Parameters.AddWithValue("@extraChange", extraChange);
                    cm1.ExecuteNonQuery();

                    SqlCommand cm2 = conn.CreateCommand();
                    string sql2 = "UPDATE Stay SET Status = 'Confirmed' where BookingID =  @bookingId  ";
                    cm2 = new SqlCommand(sql2, conn);
                    cm2.Parameters.AddWithValue("@bookingId", bookingId);
                    cm2.ExecuteNonQuery();

                    SqlCommand cm3 = conn.CreateCommand();
                    string sql3 = "UPDATE Room SET Status = 'Occupied' where RoomID = @roomID ";
                    cm3 = new SqlCommand(sql3, conn);
                    cm3.Parameters.AddWithValue("@roomID", GetBooking(bookingId).RoomID);
                    cm3.ExecuteNonQuery();
                    return true;
                }
            }
            return false;
        }

        public static bool ConfirmCheckOut(int bookingId, int extraChange)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    SqlCommand cm1 = conn.CreateCommand();
                    string sql1 = "UPDATE Booking SET Status = 'Checked-Out',Amount = Amount + @extraChange , CheckOutDate = GETDATE() where BookingID = @bookingId ";
                    cm1 = new SqlCommand(sql1, conn);
                    cm1.Parameters.AddWithValue("@bookingId", bookingId);
                    cm1.Parameters.AddWithValue("@extraChange", extraChange);
                    cm1.ExecuteNonQuery();

                    SqlCommand cm2 = conn.CreateCommand();
                    string sql2 = "UPDATE Stay SET ToDate = GETDATE() where BookingID =  @bookingId  ";
                    cm2 = new SqlCommand(sql2, conn);
                    cm2.Parameters.AddWithValue("@bookingId", bookingId);
                    cm2.ExecuteNonQuery();

                    SqlCommand cm3 = conn.CreateCommand();
                    string sql3 = "UPDATE Room SET Status = 'Empty' where RoomID = @roomID ";
                    cm3 = new SqlCommand(sql3, conn);
                    cm3.Parameters.AddWithValue("@roomID", GetBooking(bookingId).RoomID);
                    cm3.ExecuteNonQuery();
                    return true;
                }
            }
            return false;
        }

        public static void Update()
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    SqlCommand cm = conn.CreateCommand();
                    cm.CommandText = "pro_AutoUpdateStatus12h";
                    cm.CommandType = System.Data.CommandType.StoredProcedure;
                    cm.ExecuteNonQuery();
                }
            }

            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    SqlCommand cm = conn.CreateCommand();
                    cm.CommandText = "pro_AutoUpdateStatus14h";
                    cm.CommandType = System.Data.CommandType.StoredProcedure;
                    cm.ExecuteNonQuery();
                }
            }
        }
    }
}
