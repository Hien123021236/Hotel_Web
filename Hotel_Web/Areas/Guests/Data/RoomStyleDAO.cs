
using Hotel_Web.Areas.Guests.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Guests.Data
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
    }
}
