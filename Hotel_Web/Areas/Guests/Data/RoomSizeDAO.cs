using Hotel_Web.Areas.Guests.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Guests.Data
{
    public class RoomSizeDAO
    {
        public static RoomSize GetRoomSize(int id)
        {
            RoomSize rs = null;
            SqlConnection conn = Connection.GetConnection();
            if (conn != null)
            {
                string sql = "select * from RoomSize where RoomSizeID = @id";
                SqlCommand cm = new SqlCommand(sql, conn);
                cm.Parameters.AddWithValue("@id", id);
                var reader = cm.ExecuteReader();
                if (reader.HasRows)
                {
                    if (reader.Read())
                    {
                        rs = new RoomSize();
                        rs.RoomSizeID = reader.GetInt32(0);
                        rs.RoomSizeName = reader.GetString(1);
                        rs.RoomSizeShortName = reader.GetString(2);
                        rs.GuestCount = reader.GetInt32(3);
                        rs.Description = reader.GetString(4);
                    }
                }
                conn.Close();
            }
            return rs;
        }

        public static List<RoomSize> GetAllRoomSize()
        {
            List<RoomSize> list = new List<RoomSize>();
            SqlConnection conn = Connection.GetConnection();
            if (conn != null)
            {
                string sql = "select * from RoomSize";
                SqlCommand cm = new SqlCommand(sql, conn);
                var rs = cm.ExecuteReader();
                if (rs.HasRows)
                {
                    while (rs.Read())
                    {
                        RoomSize size = new RoomSize();
                        size.RoomSizeID = rs.GetInt32(0);
                        size.RoomSizeName = rs.GetString(1);
                        size.RoomSizeShortName = rs.GetString(2);
                        size.GuestCount = rs.GetInt32(3);
                        size.Description = rs.GetString(4);
                        list.Add(size);
                    }
                }
                conn.Close();
            };
            return list;
        }

    }
}
