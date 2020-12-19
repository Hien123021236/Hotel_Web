using Hotel_Web.Areas.Receptionists.Models;
using Hotel_Web.Areas.Receptionists.Models.Rooms;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Data
{
    public class RoomsDAO
    {
      
        public static Room GetRoom(int id)
        {
            Room r = null;
            SqlConnection conn = Connection.GetConnection();
            if (conn != null)
            {
                string sql = "select * from Room where RoomID = @id";
                SqlCommand cm = new SqlCommand(sql, conn);
                cm.Parameters.AddWithValue("@id", id);
                var rs = cm.ExecuteReader();
                if (rs.HasRows)
                {
                    rs.Read();
                    r = new Room();
                    r.RoomID = rs.GetInt32(0);
                    r.RoomTypeID = rs.GetInt32(1);
                    r.Status = rs.GetString(2);
                }
                conn.Close();
            }
            return r;
        }

        public static List<RoomModel> GetAllRoomsModel()
        {
            List<RoomModel> rooms = new List<RoomModel>();
            
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "select RoomID from Room ";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    var rs = cm.ExecuteReader();
                    while (rs.Read())
                    {
                        rooms.Add(GetRoomModel(rs.GetInt32(0)));
                    }
                }
            }
            return rooms;
        }

        public static bool DeleteRoomModel(int roomid)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "Select * from Booking Where RoomID=@roomid";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    cm.Parameters.AddWithValue("@roomid", roomid);
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        return false;
                    }
                    else
                    {
                        rs.Close();
                        string sql1 = "Delete Room Where RoomID=@roomid";
                        SqlCommand cm1 = new SqlCommand(sql1, conn);
                        cm1.Parameters.AddWithValue("@roomid", roomid);
                        cm1.ExecuteNonQuery();
                        return true;
                    }
                }
            }
            return false;
        }

        public static bool InsertRoom(Room room)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    if (!RoomsDAO.CheckIsExistRoomById(room.RoomID))
                    {
                        string sql = "INSERT INTO Room(RoomID,RoomTypeID,Status) VALUES(@roomid,@roomtypeid,@status)";
                        SqlCommand cm = new SqlCommand(sql, conn);
                        cm.Parameters.AddWithValue("@roomid", room.RoomID);
                        cm.Parameters.AddWithValue("@roomtypeid", room.RoomTypeID);
                        cm.Parameters.AddWithValue("@status", room.Status);
                        cm.ExecuteNonQuery();
                        return true;
                    }  
                }
            }
            return false;
        }

        public static bool UpdateRoom(Room room)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "UPDATE Room SET RoomTypeID = @roomtypeid,Status = @status WHERE RoomID=@roomid";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    cm.Parameters.AddWithValue("@roomid", room.RoomID);
                    cm.Parameters.AddWithValue("@roomtypeid", room.RoomTypeID);
                    cm.Parameters.AddWithValue("@status", room.Status);
                    cm.ExecuteNonQuery();
                    return true;
                }
            }
            return false;
        }

        public static bool CheckIsExistRoomById(int roomid)
        {
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    if (roomid>0)
                    {
                        string sql = "SELECT* FROM dbo.Room WHERE RoomID=@roomid";
                        SqlCommand cm = new SqlCommand(sql, conn);
                        cm.Parameters.AddWithValue("@roomid", roomid);
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

        public static RoomModel GetRoomModel(int roomid)
        {
            RoomModel r = null;
            SqlConnection conn = Connection.GetConnection();
            if (conn != null)
            {
                string sql = "select * from Room where RoomID = @roomid";
                SqlCommand cm = new SqlCommand(sql, conn);
                cm.Parameters.AddWithValue("@roomid", roomid);
                var rs = cm.ExecuteReader();
                if (rs.HasRows)
                {
                    rs.Read();
                    r = new RoomModel();
                    r.RoomID = rs.GetInt32(0);
                    r.RoomType = RoomTypeDAO.GetRoomTypeModel(rs.GetInt32(1));
                    r.Status = rs.GetString(2);
                }
                conn.Close();
            }
            return r;
        }

        public static RoomViewModel GetRoomViewModel(int roomid)
        {
            RoomViewModel model = null;
            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    SqlCommand cm = new SqlCommand("select * from Room where RoomID = @roomid", conn);
                    cm.Parameters.AddWithValue("@roomid", roomid);
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        rs.Read();
                        model = new RoomViewModel();
                        model.RoomID = rs.GetInt32(0);
                        model.RoomType = RoomTypeDAO.GetRoomTypeModel(rs.GetInt32(1));
                        model.Status = rs.GetString(2);
                        Booking CurrentBooking = BookingDAO.GetCurrentBookingOfRoom(model.RoomID);
                        if(CurrentBooking != null)
                        {
                            model.Guests = StayDAO.GetALLGuestsOfBooking(CurrentBooking.BookingID);
                            model.RemainingTime = BookingDAO.GetRemainingTimeOfBooking(CurrentBooking.BookingID);
                        }
                        else
                        {
                            model.Guests = new List<Guest>();
                            model.RemainingTime = TimeSpan.Zero;
                        }
                    }
                    conn.Close();
                }
            }
            return model;
        }


        public static RoomsViewModel GetRoomsViewModel()
        {
            RoomsViewModel model = new RoomsViewModel();

            model.RoomStyles = RoomStyleDAO.GetAllRoomStyleViewModel();
            model.RoomSizes = RoomSizeDAO.GetAllRoomSizeViewModel();

            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string sql = "select RoomID from Room";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        while (rs.Read())
                        {
                            RoomViewModel room = GetRoomViewModel(rs.GetInt32(0));
                            if (room.Status == "Empty") model.EmptyCount++;
                            if (room.Status == "Reserved") model.ReservedCount++;
                            if (room.Status == "Occupied" || room.Status == "Stayover") model.OccupiedCount++;
                            if (room.Status == "Stayover") model.StayoverCount++;
                            model.Rooms.Add(room);
                        }
                    }
                    conn.Close();
                }
            }
            return model;
        }


        public static RoomsViewModel GetRoomsViewModel(List<string> Styles, List<string> Sizes)
        {
            RoomsViewModel model = new RoomsViewModel();

            model.RoomStyles = RoomStyleDAO.GetAllRoomStyleViewModel();
            model.RoomSizes = RoomSizeDAO.GetAllRoomSizeViewModel();

            using (SqlConnection conn = Connection.GetConnection())
            {
                if (conn != null)
                {
                    string styles_formated = string.IsNullOrEmpty(string.Join(",", Styles)) ? ("0") : (string.Join(",", Styles));
                    string sizes_formated = string.IsNullOrEmpty(string.Join(",", Sizes)) ? ("0") : (string.Join(",", Sizes));
                    string sql = "select RoomID from Room, RoomType where Room.RoomTypeID = RoomType.RoomTypeID and RoomStyleID IN (" + styles_formated + ") and RoomSizeID IN ("+ sizes_formated + ")";
                    SqlCommand cm = new SqlCommand(sql, conn);
                    var rs = cm.ExecuteReader();
                    if (rs.HasRows)
                    {
                        while (rs.Read())
                        {
                            RoomViewModel room = GetRoomViewModel(rs.GetInt32(0));
                            if (room.Status == "Empty") model.EmptyCount++;
                            if (room.Status == "Reserved") model.ReservedCount++;
                            if (room.Status == "Occupied") model.OccupiedCount++;
                            if (room.Status == "Stayover") model.StayoverCount++;
                            model.Rooms.Add(room);
                        }
                    }
                    conn.Close();
                }
            }
            return model;
        }



        public static int GetAvailableRoomID(int RoomTypeID, DateTime CheckInDate, DateTime CheckOutDate) {
            SqlConnection conn = Connection.GetConnection();
            string sql = "SELECT RoomID from Room where RoomTypeID = @roomtypeid EXCEPT SELECT RoomID from Booking WHERE (CheckInDate < @checkoutdate) AND (@checkoutdate <= CheckOutDate)	OR(CheckOutDate > @checkindate) AND	(@checkindate >= CheckInDate) OR (CheckInDate > @checkindate) AND (CheckOutDate < @checkoutdate)";
            SqlCommand cm = new SqlCommand(sql, conn);
            cm.Parameters.AddWithValue("@roomtypeid", RoomTypeID);
            cm.Parameters.AddWithValue("@checkindate", CheckInDate);
            cm.Parameters.AddWithValue("@checkoutdate", CheckOutDate);
            var rs = cm.ExecuteReader();
            if (rs.Read()) {
                return rs.GetInt32(0);
            }
            return 0;
        }
    }
}
