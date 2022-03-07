
using Hotel_Web.Areas.Receptionists.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Data
{
    public class RoomTypeDAO
    {
        public static RoomType GetRoomType(int id) {
            RoomType rt = null;
            SqlConnection conn = Connection.GetConnection();
            if (conn != null) {
                string sql = "select * from RoomType where RoomTypeID = @id";
                SqlCommand cm = new SqlCommand(sql, conn);
                cm.Parameters.AddWithValue("@id", id);
                var rs = cm.ExecuteReader();
                if (rs.HasRows){
                    if (rs.Read()) {
                        rt = new RoomType();
                        rt.RoomTypeID = rs.GetInt32(0);
                        rt.RoomStyleID = rs.GetInt32(1);
                        rt.RoomSizeID = rs.GetInt32(2);
                        rt.Price = rs.GetInt32(3);
                    }
                }
                conn.Close();
            };
            return rt;
        }

        public static RoomTypeModel GetRoomTypeModel(int id)
        {
            RoomTypeModel rt = null;
            SqlConnection conn = Connection.GetConnection();
            if (conn != null)
            {
                string sql = "select * from RoomType where RoomTypeID = @id";
                SqlCommand cm = new SqlCommand(sql, conn);
                cm.Parameters.AddWithValue("@id", id);
                var rs = cm.ExecuteReader();
                if (rs.HasRows)
                {
                    if (rs.Read())
                    {
                        rt = new RoomTypeModel();
                        rt.RoomTypeID = rs.GetInt32(0);
                        rt.RoomStyle = RoomStyleDAO.GetRoomStyle(rs.GetInt32(1));
                        rt.RoomSize = RoomSizeDAO.GetRoomSize(rs.GetInt32(2));
                        rt.Price = rs.GetInt32(3);
                        rt.Description = rs.GetString(4);
                    }
                }
                conn.Close();
            };
            return rt;
        }



        public static List<RoomType> GetAllRoomType() {
            List<RoomType> list = new List<RoomType>();
            SqlConnection conn = Connection.GetConnection();
            if (conn != null)
            {
                string sql = "select * from RoomType";
                SqlCommand cm = new SqlCommand(sql, conn);
                var rs = cm.ExecuteReader();
                if (rs.HasRows)
                {
                    while (rs.Read())
                    {
                        RoomType rt = new RoomType();
                        rt.RoomTypeID = rs.GetInt32(0);
                        rt.RoomStyleID = rs.GetInt32(1);
                        rt.RoomSizeID = rs.GetInt32(2);
                        rt.Price = rs.GetInt32(3);
                        rt.Description = rs.GetString(4);
                        list.Add(rt);
                    }
                }
                conn.Close();
            };
            return list;
        }


        public static List<RoomTypeModel> GetAllRoomTypeModel()
        {
            List<RoomTypeModel> list = new List<RoomTypeModel>();
            SqlConnection conn = Connection.GetConnection();
            if (conn != null)
            {
                string sql = "select * from RoomType";
                SqlCommand cm = new SqlCommand(sql, conn);
                var rs = cm.ExecuteReader();
                if (rs.HasRows)
                {
                    while (rs.Read())
                    {
                        RoomTypeModel rt = new RoomTypeModel();
                        rt.RoomTypeID = rs.GetInt32(0);
                        rt.RoomStyle = RoomStyleDAO.GetRoomStyle(rs.GetInt32(1));
                        rt.RoomSize = RoomSizeDAO.GetRoomSize(rs.GetInt32(2));
                        rt.Price = rs.GetInt32(3);
                        rt.Description = rs.GetString(4);
                        list.Add(rt);
                    }
                }
                conn.Close();
            };
            return list;
        }

        public static RoomType GetRoomTypeBySizeAndStyle(int styleid, int sizeid)
        {
            RoomType rt = null;
            SqlConnection conn = Connection.GetConnection();
            if (conn != null)
            {
              
                string sql = "select * from RoomType where RoomSizeID = @sizeid and RoomStyleID = @styleid";
                SqlCommand cm = new SqlCommand(sql, conn);
                cm.Parameters.AddWithValue("@styleid", styleid);
                cm.Parameters.AddWithValue("@sizeid", sizeid);
                var rs = cm.ExecuteReader();
                if (rs.HasRows)
                {
                    if (rs.Read())
                    {
                        rt = new RoomType();
                        rt.RoomTypeID = rs.GetInt32(0);
                        rt.RoomStyleID = rs.GetInt32(1);
                        rt.RoomSizeID = rs.GetInt32(2);
                        rt.Price = rs.GetInt32(3);
                    }
                }
                conn.Close();
            };
            return rt;
        }


        public static int InsertRoomType(int roomstyleid, int roomsizeid, int price, string description)
        {
            int id = 0;
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    if (!RoomTypeDAO.CheckIsExistRoomTypeByStyleIdAndSizeId(roomstyleid,roomsizeid))
                    {
                        SqlCommand cm = conn.CreateCommand();
                        cm.CommandText = "pro_CreateRoomType";
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
                            string sql = "UPDATE RoomType SET RoomStyleID = @roomstyleid, RoomSizeID = @roomsizeid, Price = @price, Description = @description where RoomTypeID = @roomtypeid ";
                            cm = new SqlCommand(sql, conn);
                            cm.Parameters.AddWithValue("@roomtypeid", SqlDbType.Int).Value = id;
                            cm.Parameters.AddWithValue("@roomstyleid", SqlDbType.Int).Value = roomstyleid;
                            cm.Parameters.AddWithValue("@roomsizeid", SqlDbType.Int).Value = roomsizeid;
                            cm.Parameters.AddWithValue("@price", SqlDbType.Int).Value = price;
                            cm.Parameters.AddWithValue("@description", SqlDbType.NVarChar).Value = description;
                            int row = cm.ExecuteNonQuery();
                            if (row > 0) return id;
                        }
                    }
                }
            }
            return 0;
        }

        public static bool UpdateRoomType(int roomstyleid , int roomsizeid , int price , string description)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "UPDATE RoomType SET Price = @price , Description = @description WHERE RoomStyleID = @roomstyleid AND RoomSizeID =@roomsizeid";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    cm.Parameters.AddWithValue("@roomstyleid", roomstyleid);
                    cm.Parameters.AddWithValue("@roomsizeid", roomsizeid);
                    cm.Parameters.AddWithValue("@price", price);
                    cm.Parameters.AddWithValue("@description", description);
                    cm.ExecuteNonQuery();
                    return true;
                }
            }
            return false;
        }

        public static bool DeleteRoomTypeModel(int roomtypeid)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "Select* from Room Where RoomTypeID = @roomtypeid";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    cm.Parameters.AddWithValue("@roomtypeid", roomtypeid);
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        return false;
                    }
                    else
                    {
                        rs.Close();
                        string sql1 = "Delete RoomType Where RoomTypeID=@roomtypeid";
                        SqlCommand cm1 = new SqlCommand(sql1, conn);
                        cm1.Parameters.AddWithValue("@roomtypeid", roomtypeid);
                        cm1.ExecuteNonQuery();
                        return true;
                    }
                }
            }
            return false;
        }
        public static bool CheckIsExistRoomTypeByStyleIdAndSizeId(int roomstyleid , int roomsizeid)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    if (roomstyleid > 0 && roomsizeid>0)
                    {
                        string sql = "SELECT* FROM dbo.RoomType WHERE RoomStyleID=@roomstyleid AND RoomSizeID=@roomsizeid";
                        SqlCommand cm = new SqlCommand(sql, conn);
                        cm.Parameters.AddWithValue("@roomstyleid", roomstyleid);
                        cm.Parameters.AddWithValue("@roomsizeid", roomsizeid);
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
