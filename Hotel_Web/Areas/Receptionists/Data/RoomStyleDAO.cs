
using Hotel_Web.Areas.Receptionists.Models;
using Hotel_Web.Areas.Receptionists.Models.Rooms;
using System;
using System.Collections.Generic;
using System.Data;
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

        public static int InsertRoomStyle(string name, string shortname,string description)
        {
            int id = 0;
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    if (!RoomStyleDAO.CheckIsExistRoomStyleByName(name))
                    {
                        SqlCommand cm = conn.CreateCommand();
                        cm.CommandText = "pro_CreateRoomStyle";
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
                            string sql = "UPDATE RoomStyle SET RoomStyleName = @name, RoomStyleShortName = @shortname, Description = @description where RoomStyleID = @roomstyleid ";
                            cm = new SqlCommand(sql, conn);
                            cm.Parameters.AddWithValue("@roomstyleid", SqlDbType.Int).Value = id;
                            cm.Parameters.AddWithValue("@name", SqlDbType.NVarChar).Value = name;
                            cm.Parameters.AddWithValue("@shortname", SqlDbType.NVarChar).Value = shortname;
                            cm.Parameters.AddWithValue("@description", SqlDbType.NVarChar).Value = description;
                            int row = cm.ExecuteNonQuery();
                            if (row > 0) return id;
                        }
                    }
                }
            }
            return 0;
        }

        public static bool UpdateRoomStyle(RoomStyle style)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "UPDATE RoomStyle SET RoomStyleName =@name, RoomStyleShortName = @shortname , Description = @description WHERE RoomStyleID =@id";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    cm.Parameters.AddWithValue("@id", style.RoomStyleID);
                    cm.Parameters.AddWithValue("@name", style.RoomStyleName);
                    cm.Parameters.AddWithValue("@shortname", style.RoomStyleShortName);
                    cm.Parameters.AddWithValue("@description", style.Description);
                    cm.ExecuteNonQuery();
                    return true;
                }
            }
            return false;
        }

        public static bool DeleteRoomStyle(int roomstyleid)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "Select* from RoomType Where RoomStyleID = @roomstyleid";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    cm.Parameters.AddWithValue("@roomstyleid", roomstyleid);
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        return false;
                    }
                    else
                    {
                        rs.Close();
                        string sql1 = "Delete RoomStyle Where RoomStyleID=@roomstyleid";
                        SqlCommand cm1 = new SqlCommand(sql1, conn);
                        cm1.Parameters.AddWithValue("@roomstyleid", roomstyleid);
                        cm1.ExecuteNonQuery();
                        return true;
                    }
                }
            }
            return false;
        }
        public static bool CheckIsExistRoomStyleByName(string name)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    if (name != null && name != "")
                    {
                        string sql = "SELECT* FROM RoomStyle WHERE RoomStyleName = @name";
                        SqlCommand cm = new SqlCommand(sql, conn);
                        cm.Parameters.AddWithValue("@name", name);
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
    }
}
