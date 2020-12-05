
using Hotel_Web.Areas.Receptionists.Models;
using Hotel_Web.Areas.Receptionists.Models.Rooms;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Data
{
    public class RoomStyleDAO
    {
        public static RoomStyle GetRoomStyle(int id) {
            RoomStyle ot = null;
            SqlConnection conn = Connection.GetConnection();
            if (conn != null) {
                string sql = "select * from RoomStyle where  RoomStyleID = @id";
                SqlCommand cm = new SqlCommand(sql, conn);
                cm.Parameters.AddWithValue("@id", id);
                var rs = cm.ExecuteReader();
                if (rs.HasRows){
                    if (rs.Read()) {
                        ot = new RoomStyle();
                        ot.RoomStyleID = rs.GetInt32(0);
                        ot.RoomStyleName = rs.GetString(1);
                        ot.RoomStyleShortName = rs.GetString(2);
                        ot.Description = rs.GetString(3);
                    }
                }
                conn.Close();
            }
            return ot;
        }


        public static List<RoomStyle> GetAllRoomStyle()
        {
            List<RoomStyle> list = new List<RoomStyle>();
            SqlConnection conn = Connection.GetConnection();
            if (conn != null)
            {
                string sql = "select * from RoomStyle";
                SqlCommand cm = new SqlCommand(sql, conn);
                var rs = cm.ExecuteReader();
                if (rs.HasRows)
                {
                    while (rs.Read())
                    {
                        RoomStyle ot = new RoomStyle();
                        ot.RoomStyleID = rs.GetInt32(0);
                        ot.RoomStyleName = rs.GetString(1);
                        ot.RoomStyleShortName = rs.GetString(2);
                        ot.Description = rs.GetString(3);
                        list.Add(ot);
                    }
                }
                conn.Close();
            };
            return list;
        }


        public static RoomStyleViewModel GetRoomStyleViewModel(int roomstyleid)
        {
            RoomStyleViewModel model = null;
            RoomStyle style = GetRoomStyle(roomstyleid);
            if ( style != null)
            {
                model = new RoomStyleViewModel();
                model.RoomStyle = style;

                using (SqlConnection conn = Connection.GetConnection())
                {
                    if (conn != null)
                    {
                        string sql = "SELECT COUNT(DISTINCT RoomID) count FROM Room, dbo.RoomType WHERE Room.RoomTypeID = RoomType.RoomTypeID AND RoomStyleID = @roomstyleid";
                        SqlCommand cm = new SqlCommand(sql, conn);
                        cm.Parameters.AddWithValue("@roomstyleid", roomstyleid);
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



        public static List<RoomStyleViewModel> GetAllRoomStyleViewModel()
        {
            List<RoomStyleViewModel> list = new List<RoomStyleViewModel>();

            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    SqlCommand cm = new SqlCommand("SELECT RoomStyleID FROM RoomStyle", conn);
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        while (rs.Read())
                        {
                            RoomStyleViewModel model = GetRoomStyleViewModel(rs.GetInt32(0));
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
