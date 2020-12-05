
using Hotel_Web.Areas.Guests.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Guests.Data
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
    }
}
