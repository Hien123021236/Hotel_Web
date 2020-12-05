using Hotel_Web.Areas.Receptionists.Models;
using System;
using System.Collections.Generic;
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
