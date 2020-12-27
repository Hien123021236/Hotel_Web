using Hotel_Web.Areas.Receptionists.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Data
{
    public class StaffDA0
    {
        public static Staff GetStaff(int StaffID) {
            Staff staff = null;
            SqlConnection conn = Connection.GetConnection();
            if (conn != null)
            {
                string sql = "select * from Staff where StaffID = @id";
                SqlCommand cm = new SqlCommand(sql, conn);
                cm.Parameters.AddWithValue("@id", StaffID);
                var rs = cm.ExecuteReader();
                if (rs.HasRows)
                {
                    rs.Read();
                    staff = new Staff();
                    staff.StaffID = rs.GetInt32(0);
                    staff.FullName = rs.GetString(1);
                    staff.Position = rs.GetString(2);
                    staff.Password = rs.GetString(3);
                    staff.IsOnline = rs.GetBoolean(4);
                }
                conn.Close();
            }
            return staff;
        }

        public static List<Staff> GetAllStaffs()
        {
            List<Staff> list = new List<Staff>();
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "SELECT * FROM dbo.Staff";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        while (rs.Read())
                        {
                            Staff staff = new Staff();

                            staff.StaffID = rs.GetInt32(0);
                            staff.FullName = rs.GetString(1);
                            staff.Position = rs.GetString(2);
                            staff.Password = rs.GetString(3);
                            staff.IsOnline = rs.GetBoolean(4);

                            list.Add(staff);
                        }
                    }
                }
            }
            return list;
        }

        public static int InsertStaff(Staff s)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {                   
                    string sql = "INSERT INTO Staff (StaffID ,FullName, Position, Password ,IsOnline) VALUES (@staffid, @fullname,@position,@password,@isonline)";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    cm.Parameters.AddWithValue("@staffid", SqlDbType.Int).Value = s.StaffID;
                    cm.Parameters.AddWithValue("@fullname", SqlDbType.NVarChar).Value = s.FullName;
                    cm.Parameters.AddWithValue("@position", SqlDbType.NVarChar).Value = s.Position;
                    cm.Parameters.AddWithValue("@password",SqlDbType.NVarChar).Value = s.Password;
                    cm.Parameters.AddWithValue("@isonline", SqlDbType.Bit).Value = s.IsOnline;
                   int row = cm.ExecuteNonQuery();
                    if (row > 0) return s.StaffID;
                }
            }
            return 0;
        }

        public static bool CheckIsExistStaffByID(int id)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "SELECT* FROM Staff WHERE StaffID = @staffid";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    cm.Parameters.AddWithValue("@staffid", id);
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        return true;
                    }
                }
            }
            return false;
        }

        public static bool UpdateStaff(Staff s)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "UPDATE Staff SET FullName = @fullname, Position = @position, Password = @password ,IsOnline =@isonline WHERE StaffID = @staffid";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    cm.Parameters.AddWithValue("@staffid", SqlDbType.Int).Value = s.StaffID;
                    cm.Parameters.AddWithValue("@fullname", SqlDbType.NVarChar).Value = (s.FullName == null) ? DBNull.Value : (object)s.FullName;
                    cm.Parameters.AddWithValue("@position", SqlDbType.NVarChar).Value = (s.Position == null) ? DBNull.Value : (object)s.Position;
                    cm.Parameters.AddWithValue("@password", SqlDbType.NVarChar).Value = (s.Password == null) ? DBNull.Value : (object)s.Password;
                    cm.Parameters.AddWithValue("@isonline", SqlDbType.Bit).Value = s.IsOnline;
                    cm.ExecuteNonQuery();
                    return true;
                }
            }
            return false;
        }



        public static bool CheckLoginAccess(int StaffID, string Password) {
            SqlConnection conn = Connection.GetConnection();
            if (conn != null)
            {
                string sql = "select * from Staff where StaffID = @staffid and Password = @password ";
                SqlCommand cm = new SqlCommand(sql, conn);
                cm.Parameters.AddWithValue("@staffid", StaffID);
                cm.Parameters.AddWithValue("@password", Password);
                var rs = cm.ExecuteReader();
                if (rs.HasRows)
                {
                    return true;
                }
                conn.Close();
            }
            return false;
        }
    }
}
