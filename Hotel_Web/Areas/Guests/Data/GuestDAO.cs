﻿using Hotel_Web.Areas.Guests.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Guests.Data
{
    public class GuestDAO
    {
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
                        string sql = "UPDATE Guest SET FullName = @fullname, Gender = @gender, Email = @email, Phone = @phone, IDCardNumber = @idcard, Country = @country where GuestID = @guestid ";
                        cm = new SqlCommand(sql, conn);
                        cm.Parameters.AddWithValue("@guestid", SqlDbType.Int).Value = id;
                        cm.Parameters.AddWithValue("@fullname", SqlDbType.NVarChar).Value = guest.FullName;
                        cm.Parameters.AddWithValue("@gender", SqlDbType.NVarChar).Value = guest.Gender;
                        cm.Parameters.AddWithValue("@email", SqlDbType.NVarChar).Value = guest.Email;
                        cm.Parameters.AddWithValue("@phone", SqlDbType.NVarChar).Value = guest.Phone;
                        cm.Parameters.AddWithValue("@idcard", SqlDbType.NVarChar).Value = guest.IDCardNumber;
                        cm.Parameters.AddWithValue("@country", SqlDbType.NVarChar).Value = guest.Country;

                        int row = cm.ExecuteNonQuery();

                        if (row > 0) return id;
                    }
                }
            }
            return 0;
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
    }
}
