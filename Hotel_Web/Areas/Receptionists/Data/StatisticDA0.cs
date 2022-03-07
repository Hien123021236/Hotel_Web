using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Hotel_Web.Areas.Receptionists.Models;

namespace Hotel_Web.Areas.Receptionists.Data
{
    public class StatisticDA0
    {
        public static Dictionary<string, int> GetRevenueMonths(int year)
        {
            Dictionary<string, int> values = new Dictionary<string, int>();

            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "SELECT MONTH(CheckOutDate) As Month,SUM(Amount) As Amount FROM Booking WHERE Status = 'Checked-Out' AND YEAR(CheckOutDate) =@year GROUP BY YEAR(CheckOutDate), MONTH(CheckOutDate)";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    cm.Parameters.AddWithValue("@year", year);
                    var rs = cm.ExecuteReader();
                    if (rs.Read()) {
                        for (int i = 1; i <= 12; i++)
                        {
                            if (rs.GetInt32(0) == i)
                            {
                                values.Add(i.ToString(), rs.GetInt32(1));
                                if (!rs.Read()) {
                                    for (int j = i+1; j <= 12; j++) {
                                        values.Add(j.ToString(), 0);
                                    }
                                    return values;
                                }
                            }
                            else
                            {
                                values.Add(i.ToString(), 0);
                            }

                        }
                    };
                    
                   
                }
            }
            return values;
        }

        public static List<ReportModel> GetAllAmountInMonthOfYear()
        {
            List<ReportModel> list = new List<ReportModel>();

            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "SELECT YEAR(CheckOutDate) AS Year, MONTH(CheckOutDate) AS Month,SUM(Amount) AS Amount FROM Booking WHERE Status = 'Checked-Out' GROUP BY YEAR(CheckOutDate), MONTH(CheckOutDate)";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        while (rs.Read())
                        {
                            ReportModel r = new ReportModel();
                            r.Year = rs[0] as int? ?? 0;
                            r.Month = rs[1] as int? ?? 0;
                            r.Amount = rs[2] as int? ?? 0;                         
                            list.Add(r);
                        }
                    }
                }
            }
            return list;
        }
    }
}
