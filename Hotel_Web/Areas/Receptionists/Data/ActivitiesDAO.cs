using Hotel_Web.Areas.Receptionists.Models;
using Hotel_Web.Areas.Receptionists.Models.Activities;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Data
{
    public class ActivitiesDAO
    {
        public static ActivitiesViewModel GetActivitiesViewModel() {
            ActivitiesViewModel model = new ActivitiesViewModel();
            model.ListCheckIn = new List<BookingModel>();
            model.ListCheckOut = new List<BookingModel>();
            model.ListConfirmCheckIn = new List<BookingModel>();
            model.ListConfirmCheckOut = new List<BookingModel>();

            //Empty Rooms Count
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "SELECT COUNT(RoomID) FROM Room WHERE Status = 'Empty'";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    var rs = cm.ExecuteReader();
                    if (rs.Read())
                    {
                        model.EmptyRoomsCount = rs[0] as int? ?? 0;
                    }
                    conn.Close();
                }
            }

            //Occupied Rooms Count
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "SELECT COUNT(RoomID) FROM Room WHERE Status = 'Occupied' or Status = 'Stayover' ";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    var rs = cm.ExecuteReader();
                    if (rs.Read())
                    {
                        model.OccupiedRoomsCount = rs[0] as int? ?? 0;
                    }
                    conn.Close();
                }
            }

            //List check-in bookings
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    BookingModel bk = null;
                    string sql = "SELECT BookingID FROM dbo.Booking WHERE YEAR(CheckInDate) <= YEAR(CURRENT_TIMESTAMP) and MONTH(CheckInDate) <= MONTH(CURRENT_TIMESTAMP) and DAY(CheckInDate) <= DAY(CURRENT_TIMESTAMP) and Status = 'Confirmed'";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        while (rs.Read())
                        {
                            bk = BookingDAO.GetBookingModel(rs[0] as int? ?? 0);
                            model.ListCheckIn.Add(bk);
                        }
                    }
                    conn.Close();
                }
            }

            //List confirm check-in bookings
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    BookingModel bk = null;
                    string sql = "SELECT BookingID FROM dbo.Booking WHERE YEAR(CheckInDate) >= YEAR(CURRENT_TIMESTAMP) and MONTH(CheckInDate) >= MONTH(CURRENT_TIMESTAMP) and DAY(CheckInDate) >= DAY(CURRENT_TIMESTAMP) and Status = 'Checked-In'";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        while (rs.Read())
                        {
                            bk = BookingDAO.GetBookingModel(rs[0] as int? ?? 0);
                            model.ListConfirmCheckIn.Add(bk);
                        }
                    }
                    conn.Close();
                }
            }

            //List check-out bookings
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    BookingModel bk = null;
                    string sql = "SELECT BookingID FROM dbo.Booking WHERE YEAR(CheckOutDate) <= YEAR(CURRENT_TIMESTAMP) and MONTH(CheckOutDate) <= MONTH(CURRENT_TIMESTAMP) and DAY(CheckOutDate) <= DAY(CURRENT_TIMESTAMP) and Status IN ('Checked-In','Stayover')";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        while (rs.Read())
                        {
                            bk = BookingDAO.GetBookingModel(rs[0] as int? ?? 0);
                            model.ListCheckOut.Add(bk);
                        }
                    }
                    conn.Close();
                }
            }

            //List confirm check-out bookings
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    BookingModel bk = null;
                    string sql = "SELECT BookingID FROM dbo.Booking WHERE YEAR(CheckOutDate) >= YEAR(CURRENT_TIMESTAMP) and MONTH(CheckOutDate) >= MONTH(CURRENT_TIMESTAMP) and DAY(CheckOutDate) >= DAY(CURRENT_TIMESTAMP) and Status ='Checked-Out'";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        while (rs.Read())
                        {
                            bk = BookingDAO.GetBookingModel(rs[0] as int? ?? 0);
                            model.ListConfirmCheckOut.Add(bk);
                        }
                    }
                    conn.Close();
                }
            }

            return model;
        }
    }
}
