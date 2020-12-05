using Hotel_Web.Areas.Guests.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Guests.Data
{
    public class PaymentDAO
    {
        public static int InsertPayment(Payment payment)
        {
            int id = 0;
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    SqlCommand cm = conn.CreateCommand();
                    cm.CommandText = "pro_CreatePayment";
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
                        string sql = "UPDATE Payment SET CardName = @cardname, CardNumber = @cardnumber, Month = @month, Year = @year, CVC = @cvc WHERE PaymentID= @paymentid ";
                        cm = new SqlCommand(sql, conn);
                        cm.Parameters.AddWithValue("@paymentid", SqlDbType.Int).Value = id;
                        cm.Parameters.AddWithValue("@cardname", SqlDbType.NVarChar).Value = payment.CardName;
                        cm.Parameters.AddWithValue("@cardnumber", SqlDbType.NVarChar).Value = payment.CardNumber;
                        cm.Parameters.AddWithValue("@month", SqlDbType.Int).Value = payment.Month;
                        cm.Parameters.AddWithValue("@year", SqlDbType.Int).Value = payment.Year;
                        cm.Parameters.AddWithValue("@cvc", SqlDbType.NVarChar).Value = payment.CVC;
                        

                        int row = cm.ExecuteNonQuery();

                        if (row > 0) return id;
                    }
                }
            }

            return 0;
        }
    }
}
