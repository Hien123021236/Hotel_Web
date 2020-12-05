using Hotel_Web.Areas.Receptionists.Models;
using Hotel_Web.Areas.Receptionists.Models.Rooms;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Data
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




        public static RoomSizeViewModel GetRoomSizeViewModel(int roomsizeid)
        {
            RoomSizeViewModel model = null;
            RoomSize size = GetRoomSize(roomsizeid);
            if (size != null)
            {
                model = new RoomSizeViewModel();
                model.RoomSize = size;

                using (SqlConnection conn = Connection.GetConnection())
                {
                    if (conn != null)
                    {
                        string sql = "SELECT COUNT(DISTINCT RoomID) count FROM Room, dbo.RoomType WHERE Room.RoomTypeID = RoomType.RoomTypeID AND RoomSizeID = @roomsizeid";
                        SqlCommand cm = new SqlCommand(sql, conn);
                        cm.Parameters.AddWithValue("@roomsizeid", roomsizeid);
                        var rs = cm.ExecuteReader();
                        if (rs.Read())
                        {
                            model.Count = rs.GetInt32(0);
                        }
                        conn.Close();
                    }
                }
            }
            return model;
        }



        public static List<RoomSizeViewModel> GetAllRoomSizeViewModel()
        {
            List<RoomSizeViewModel> list = new List<RoomSizeViewModel>();

            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    SqlCommand cm = new SqlCommand("SELECT RoomSizeID FROM RoomSize", conn);
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        while (rs.Read())
                        {
                            RoomSizeViewModel model = GetRoomSizeViewModel(rs.GetInt32(0));
                            list.Add(model);
                        }
                    }

                    conn.Close();
                }
            }

            return list;
        }
    }
}
