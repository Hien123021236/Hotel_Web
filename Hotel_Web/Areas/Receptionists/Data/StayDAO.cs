using Hotel_Web.Areas.Receptionists.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Data
{
    public class StayDAO
    {
        public static List<Guest> GetALLGuestsOfBooking(int bookingid) {
            List<Guest> guests = new List<Guest>();
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    SqlCommand cm = new SqlCommand("select GuestID from Stay WHERE BookingID = @bookingid", conn);
                    cm.Parameters.AddWithValue("@bookingid", bookingid);
                    var rs = cm.ExecuteReader();
                    while (rs.Read())
                    {
                        Guest g = GuestDAO.GetGuest(rs.GetInt32(0));
                        guests.Add(g);
                    }
                }
            }
            return guests;
        }

        public static Stay GetStay(int stayid)
        {
            Stay s = null;
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    SqlCommand cm = new SqlCommand("select * from Stay where StayID = @stayid", conn);
                    cm.Parameters.AddWithValue("@stayid", stayid);
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        while (rs.Read())
                        {
                            s = new Stay();
                            s.StayID = rs[0] as int? ?? 0;
                            s.BookingID = rs[1] as int? ?? 0;
                            s.GuestID = rs[2] as int? ?? 0;
                            s.FromDate = rs[3] as DateTime? ?? null;
                            s.ToDate = rs[4] as DateTime? ?? null;
                        }
                    }
                }
            }
            return s;
        }

        public static List<Stay> GetStaysOfBooking(int bookingid)
        {
            List<Stay> stays = new List<Stay>();
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    SqlCommand cm = new SqlCommand("select * from Stay WHERE BookingID = @bookingid", conn);
                    cm.Parameters.AddWithValue("@bookingid", bookingid);
                    var rs = cm.ExecuteReader();
                    while (rs.Read())
                    {
                        Stay s = StayDAO.GetStay(rs.GetInt32(0));
                        stays.Add(s);
                    }
                }
            }
            return stays;
        }
        public static Stay InsertStay(Stay stay)
        {
            int id = 0;
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    SqlCommand cm = conn.CreateCommand();
                    cm.CommandText = "pro_CreateStay";
                    cm.CommandType = System.Data.CommandType.StoredProcedure;
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        rs.Read();
                        id = Decimal.ToInt32(rs.GetDecimal(0));
                        stay.StayID = id;
                    }
                    conn.Close();
                    conn.Open();
                    if (id > 0)
                    {
                        string sql = "UPDATE Stay SET BookingID = @bookingid, GuestID = @guestid, FromDate = @fromdate, ToDate = @todate ,Status = @status where StayID = @stayid ";
                        cm = new SqlCommand(sql, conn);
                        cm.Parameters.AddWithValue("@stayid", SqlDbType.Int).Value = id;
                        cm.Parameters.AddWithValue("@bookingid", SqlDbType.Int).Value = (stay.BookingID==null) ? DBNull.Value : (object)stay.BookingID;
                        cm.Parameters.AddWithValue("@guestid", SqlDbType.Int).Value = (stay.GuestID==null) ? DBNull.Value : (object)stay.GuestID;
                        cm.Parameters.AddWithValue("@fromdate", SqlDbType.DateTime).Value = (stay.FromDate ==null) ? DBNull.Value : (object)stay.FromDate;
                        cm.Parameters.AddWithValue("@todate", SqlDbType.DateTime).Value = DBNull.Value ;
                        cm.Parameters.AddWithValue("@status", SqlDbType.NVarChar).Value = DBNull.Value;
                        int row = cm.ExecuteNonQuery();

                        if (row > 0) return stay;
                    }
                }
            }
            return null;
        }

        public static bool CheckGuestStaying(int guestId)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    if (guestId > 0)
                    {
                        string sql = "SELECT * FROM dbo.Stay WHERE GuestID = @guestId AND FromDate <= GETDATE() AND ToDate IS NULL ";
                        SqlCommand cm = new SqlCommand(sql, conn);
                        cm.Parameters.AddWithValue("@guestId", guestId);
                        var rs = cm.ExecuteReader();
                        if (rs.HasRows)
                        {
                            return true;
                        }
                    }
                }
            }
            return false;
        }

        public static bool DeleteStay(int stayId)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "Delete from Stay Where StayID = @stayId";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    cm.Parameters.AddWithValue("@stayId", stayId);
                    cm.ExecuteNonQuery();
                    return true;
                }
            }
            return false;
        }

        public static bool DeleteStayOfBooking(int bookingId)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "Delete from Stay Where BookingID = @bookingId";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    cm.Parameters.AddWithValue("@bookingId", bookingId);
                    cm.ExecuteNonQuery();
                    return true;
                }
            }
            return false;
        }
    }
}
