using Hotel_Web.Areas.Guests.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Guests.Data
{
    public class RoomsDAO
    {

        public static Room GetRoom(int id)
        {
            Room r = null;
            SqlConnection conn = Connection.GetConnection();
            if (conn != null)
            {
                string sql = "select * from Room where RoomID = @id";
                SqlCommand cm = new SqlCommand(sql, conn);
                cm.Parameters.AddWithValue("@id", id);
                var rs = cm.ExecuteReader();
                if (rs.HasRows)
                {
                    rs.Read();
                    r = new Room();
                    r.RoomID = rs.GetInt32(0);
                    r.RoomTypeID = rs.GetInt32(1);
                    r.Status = rs.GetString(2);
                }
                conn.Close();
            }
            return r;
        }



        public static RoomModel GetRoomModel(int id)
        {
            RoomModel r = null;
            SqlConnection conn = Connection.GetConnection();
            if (conn != null)
            {
                string sql = "select * from Room where RoomID = @id";
                SqlCommand cm = new SqlCommand(sql, conn);
                cm.Parameters.AddWithValue("@id", id);
                var rs = cm.ExecuteReader();
                if (rs.HasRows)
                {
                    rs.Read();
                    r = new RoomModel();
                    r.RoomID = rs.GetInt32(0);
                    r.RoomType = RoomTypeDAO.GetRoomTypeModel(rs.GetInt32(1));
                    r.Status = rs.GetString(2);
                }
                conn.Close();
            }
            return r;
        }


       

        public static int GetAvailableRoomID(int RoomTypeID, DateTime CheckInDate, DateTime CheckOutDate) {
            SqlConnection conn = Connection.GetConnection();
            string sql = "SELECT RoomID from Room where RoomTypeID = @roomtypeid EXCEPT SELECT RoomID from Booking WHERE (CheckInDate < @checkoutdate) AND (@checkoutdate <= CheckOutDate)	OR(CheckOutDate > @checkindate) AND	(@checkindate >= CheckInDate) OR (CheckInDate > @checkindate) AND (CheckOutDate < @checkoutdate)";
            SqlCommand cm = new SqlCommand(sql, conn);
            cm.Parameters.AddWithValue("@roomtypeid", RoomTypeID);
            cm.Parameters.AddWithValue("@checkindate", CheckInDate);
            cm.Parameters.AddWithValue("@checkoutdate", CheckOutDate);
            var rs = cm.ExecuteReader();
            if (rs.Read()) {
                return rs.GetInt32(0);
            }
            return 0;
        }
    }
}
