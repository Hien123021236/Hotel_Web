using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Guests.Data
{
    public class Connection
    {
        public static SqlConnection GetConnection()
        {
            
            SqlConnection conn = new SqlConnection(Startup.Configuration.GetConnectionString("DefaultConnectionString"));
           
            conn.Open();
            if (conn.State == System.Data.ConnectionState.Open) 
            {
                return conn;
            }
            else
            {
                return null;
            }
        }
    }
}
