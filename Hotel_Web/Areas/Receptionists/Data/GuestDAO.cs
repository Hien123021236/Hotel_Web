using Hotel_Web.Areas.Receptionists.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Data
{
    public class GuestDAO
    {
        public static List<Guest> GetAllGuests()
        {
            List<Guest> list = new List<Guest>();
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "SELECT * FROM dbo.Guest";
                    SqlCommand cm = new SqlCommand(sql, conn);                  
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        while (rs.Read())
                        {
                            Guest g = new Guest();
 
                            g.GuestID = rs[0] as int? ?? 0;
                            g.FullName = rs[1] as string ?? null;
                            g.Gender = rs[2] as string ?? null;
                            g.Address = rs[3] as string ?? null;
                            g.Email = rs[4] as string ?? null;
                            g.Phone = rs[5] as string ?? null;
                            g.IDCardNumber = rs[6] as string ?? null;
                            g.Country = rs[7] as string ?? null;

                            list.Add(g);
                        }
                    }
                }
            }
            return list;
        }

        public static Guest GetGuest(int guestid)
        {
            Guest g = null;
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    SqlCommand cm = new SqlCommand("select * from Guest where GuestID = @guestid", conn);
                    cm.Parameters.AddWithValue("@guestid", guestid);
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        while (rs.Read())
                        {
                            g = new Guest();
                            g.GuestID = rs[0] as int? ?? 0;
                            g.FullName = rs[1] as string ?? null;
                            g.Gender = rs[2] as string ?? null;
                            g.Address = rs[3] as string ?? null;
                            g.Email = rs[4] as string ?? null;
                            g.Phone = rs[5] as string ?? null;
                            g.IDCardNumber = rs[6] as string ?? null;
                            g.Country = rs[7] as string ?? null;
                        }
                    }
                }
            }
            return g;
        }




        public static int InsertGuest(Guest guest) {
            int id = 0;
            using (SqlConnection conn = Connection.GetConnection()) {
                if (conn != null)
                {
                    SqlCommand cm = conn.CreateCommand();
                    cm.CommandText = "pro_CreateGuest";
                    cm.CommandType = System.Data.CommandType.StoredProcedure;
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        rs.Read();
                        id = Decimal.ToInt32(rs.GetDecimal(0));
                    }
                    conn.Close();
                    conn.Open();
                    if (id > 0) {
                        string sql = "UPDATE Guest SET FullName = @fullname, Gender = @gender, Email = @email ,Address =@address, Phone = @phone, IDCardNumber = @idcard, Country = @country where GuestID = @guestid ";
                        cm = new SqlCommand(sql, conn);
                        cm.Parameters.AddWithValue("@guestid", SqlDbType.Int).Value = id;
                        cm.Parameters.AddWithValue("@fullname", SqlDbType.NVarChar).Value = (guest.FullName == null) ? DBNull.Value : (object)guest.FullName;
                        cm.Parameters.AddWithValue("@gender", SqlDbType.NVarChar).Value = (guest.Gender == null) ? DBNull.Value : (object)guest.Gender;
                        cm.Parameters.AddWithValue("@email", SqlDbType.NVarChar).Value = (guest.Email ==null) ? DBNull.Value : (object)guest.Email;
                        cm.Parameters.AddWithValue("@address", SqlDbType.NVarChar).Value = (guest.Address == null) ? DBNull.Value : (object)guest.Address;
                        cm.Parameters.AddWithValue("@phone", SqlDbType.NVarChar).Value = (guest.Phone == null) ? DBNull.Value : (object)guest.Phone;
                        cm.Parameters.AddWithValue("@idcard", SqlDbType.NVarChar).Value = (guest.IDCardNumber == null) ? DBNull.Value : (object)guest.IDCardNumber;
                        cm.Parameters.AddWithValue("@country", SqlDbType.NVarChar).Value = (guest.Country == null) ? DBNull.Value : (object)guest.Country;
                        int row = cm.ExecuteNonQuery();
                        if (row > 0) return id;
                    }
                }
            }
            return 0;
        }


        public static Guest GetGuestByIdCardNumber(string idcardnumber)
        {
            Guest guest = null;
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    if (idcardnumber != null && idcardnumber != "")
                    {
                        string sql = "SELECT* FROM dbo.Guest WHERE IDCardNumber=@idcardnumber";
                        SqlCommand cm = new SqlCommand(sql, conn);
                        cm.Parameters.AddWithValue("@idcardnumber", idcardnumber);
                        var rs = cm.ExecuteReader();
                        if (rs.HasRows)
                        {
                            while (rs.Read())
                            {
                                guest = new Guest();
                                guest.GuestID = rs[0] as int? ?? 0;
                                guest.FullName = rs[1] as string;
                                guest.Gender = rs[2] as string;
                                guest.Address = rs[3] as string;
                                guest.Email = rs[4] as string;
                                guest.Phone = rs[5] as string;
                                guest.IDCardNumber = rs[6] as string;
                                guest.Country = rs[7] as string;
                            }
                        }
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            return guest;
        }

        public static bool CheckIsExistGuestByIdCard(string idcardnumber)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    if (idcardnumber != null && idcardnumber != "")
                    {
                        string sql = "SELECT* FROM dbo.Guest WHERE IDCardNumber=@idcardnumber";
                        SqlCommand cm = new SqlCommand(sql, conn);
                        cm.Parameters.AddWithValue("@idcardnumber", idcardnumber);
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


        public static bool UpdateGuest(Guest guest)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "UPDATE Guest SET FullName = @fullname ,Gender = @gender , Address = @address ,Email = @email,Phone = @phone,IDCardNumber = @idcardnumber,Country = @country WHERE GuestID = @guestid";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    cm.Parameters.AddWithValue("@guestid", SqlDbType.Int).Value = guest.GuestID;
                    cm.Parameters.AddWithValue("@fullname", SqlDbType.NVarChar).Value = (guest.FullName == null) ? DBNull.Value : (object)guest.FullName;
                    cm.Parameters.AddWithValue("@gender", SqlDbType.NVarChar).Value = (guest.Gender == null) ? DBNull.Value : (object)guest.Gender;
                    cm.Parameters.AddWithValue("@email", SqlDbType.NVarChar).Value = (guest.Email == null) ? DBNull.Value : (object)guest.Email;
                    cm.Parameters.AddWithValue("@address", SqlDbType.NVarChar).Value = (guest.Address == null) ? DBNull.Value : (object)guest.Address;
                    cm.Parameters.AddWithValue("@phone", SqlDbType.NVarChar).Value = (guest.Phone == null) ? DBNull.Value : (object)guest.Phone;
                    cm.Parameters.AddWithValue("@idcardnumber", SqlDbType.NVarChar).Value = (guest.IDCardNumber == null) ? DBNull.Value : (object)guest.IDCardNumber;
                    cm.Parameters.AddWithValue("@country", SqlDbType.NVarChar).Value = (guest.Country == null) ? DBNull.Value : (object)guest.Country;
                    cm.ExecuteNonQuery();
                    return true;
                }
            }
            return false;
        }

    }
}
