using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hotel_Web.Areas.Receptionists.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Hotel_Web.Areas.Receptionists.Models.Rooms;
using Hotel_Web.Areas.Receptionists.Models;

namespace Hotel_Web.Areas.Receptionists.Controllers
{
    public class RoomsController : Controller
    {   
        [Area("Receptionists")]
        public IActionResult Index()
        {

            if (!Authentication.AuthenticateByCookie(HttpContext))
                return Redirect("/Receptionists/Authentication/Login?Area=Receptionists&Ctrl=Rooms&Act=Index");

            BookingDAO.Update();

            List<string> StylesSelected = new List<string>();
            List<string> SizesSelected = new List<string>();

            foreach (var roomstyle in RoomStyleDAO.GetAllRoomStyle()) {
                StylesSelected.Add(roomstyle.RoomStyleID.ToString());
            }

            foreach (var roomsize in RoomSizeDAO.GetAllRoomSize())
            {
                SizesSelected.Add(roomsize.RoomSizeID.ToString());
            }

            ViewBag.StylesSelected = StylesSelected;
            ViewBag.SizesSelected = SizesSelected;
            ViewData.Model = RoomsDAO.GetRoomsViewModel();

            return View();
        }


        [Area("Receptionists")]
        [HttpPost]
        public IActionResult Index(IFormCollection data)
        {

            if (!Authentication.AuthenticateByCookie(HttpContext))
                return Redirect("/Receptionists/Authentication/Login?Area=Receptionists&Ctrl=Rooms&Act=Index");

            BookingDAO.Update();

            List<string> StylesSelected = new List<string>();
            List<string> SizesSelected = new List<string>();

            foreach (var obj in data)
            {
                if (obj.Key.StartsWith("roomstyle")) { StylesSelected = obj.Value.ToList(); }
                else
                if (obj.Key.StartsWith("roomsize")) { SizesSelected = obj.Value.ToList(); }
            }

            ViewBag.StylesSelected = StylesSelected;
            ViewBag.SizesSelected = SizesSelected;

            string str = string.Join(",", StylesSelected);

            ViewData.Model = RoomsDAO.GetRoomsViewModel(StylesSelected, SizesSelected);
            
            return View();  
        }

        [Area("Receptionists")]
        public IActionResult RoomsManagement()
        {
            if (!Authentication.AuthenticateByCookie(HttpContext))
                return Redirect("/Receptionists/Authentication/Login?Area=Receptionists&Ctrl=Rooms&Act=RoomsManagement");

            RoomsManagerViewModel model = new RoomsManagerViewModel();
            model.RoomModels = RoomsDAO.GetAllRoomsModel();
            model.RoomSizes = RoomSizeDAO.GetAllRoomSize();
            model.RoomStyles = RoomStyleDAO.GetAllRoomStyle();
            model.RoomTypeModels = RoomTypeDAO.GetAllRoomTypeModel();
            return View(model);
        }

        [Area("Receptionists")]
        [HttpPost]
        public IActionResult CreateRoom(int roomId , int roomtypeId)
        {
            if (!RoomsDAO.CheckIsExistRoomById(roomId))
            {
                var room = RoomsDAO.InsertRoom(new Room()
                {
                    RoomID = roomId,
                    Status = RoomStatuses.Empty,
                    RoomTypeID = RoomTypeDAO.GetRoomType(roomtypeId).RoomTypeID
                });
                return Json(roomId);
            }
            else
            {
                return Json(null);
            }
        }

        [Area("Receptionists")]
        [HttpPost]
        public IActionResult UpdateRoom(int roomId, int roomtypeId)
        {
            var room = RoomsDAO.UpdateRoom(new Room()
            {
                RoomID = roomId,
                Status = RoomsDAO.GetRoom(roomId).Status,
                RoomTypeID = RoomTypeDAO.GetRoomType(roomtypeId).RoomTypeID
            }) ;
            return Json(roomId);  
        }

        [Area("Receptionists")]
        [HttpPost]
        public IActionResult DeleteRoom(int roomId)
        {
            return Json(RoomsDAO.DeleteRoomModel(roomId));
        }


        [Area("Receptionists")]
        [HttpPost]
        public IActionResult CheckRoomNumberExists(int roomId)
        {
            if (RoomsDAO.CheckIsExistRoomById(roomId))
            {
                return Json(true);
            }
            else
            {
                return Json(false);
            }
        }

        [Area("Receptionists")]
        [HttpPost]
        public IActionResult CreateRoomType(int roomStyleId, int roomSizeId , int price , string description)
        {
            if (!RoomTypeDAO.CheckIsExistRoomTypeByStyleIdAndSizeId(roomStyleId,roomSizeId))
            {
               RoomTypeDAO.InsertRoomType(roomStyleId,roomSizeId,price,description);
               return Json(price);
            }
            else
            {
                RoomTypeDAO.UpdateRoomType(roomStyleId, roomSizeId, price, description);
                return Json(price);
            }
        }

        [Area("Receptionists")]
        [HttpPost]
        public IActionResult DeleteRoomType(int roomTypeId)
        {
            return Json(RoomTypeDAO.DeleteRoomTypeModel(roomTypeId));
        }

        [Area("Receptionists")]
        [HttpPost]
        public IActionResult CheckRoomTypeExists(int roomStyleId , int roomSizeId)
        {
            if (RoomTypeDAO.CheckIsExistRoomTypeByStyleIdAndSizeId(roomStyleId,roomSizeId))
            {
                return Json(true);
            }
            else
            {
                return Json(false);
            }
        }

        [Area("Receptionists")]
        [HttpPost]
        public IActionResult CreateRoomStyle(string name, string shortname, string description)
        {
            if (!RoomStyleDAO.CheckIsExistRoomStyleByName(name))
            {
                RoomStyleDAO.InsertRoomStyle(name, shortname, description);
                return Json(name);
            }
            else
            {
                return Json(null);
            }
        }

        [Area("Receptionists")]
        [HttpPost]
        public IActionResult CheckStyleNameExists(string name)
        {
            if (RoomStyleDAO.CheckIsExistRoomStyleByName(name))
            {
                return Json(true);
            }
            else
            {
                return Json(false);
            }
        }

        [Area("Receptionists")]
        [HttpPost]
        public IActionResult UpdateRoomStyle(RoomStyle style)
        {
            RoomStyleDAO.UpdateRoomStyle(style);
            return Json(style.RoomStyleID);
        }

        [Area("Receptionists")]
        [HttpPost]
        public IActionResult DeleteRoomStyle(int roomStyleId)
        {
            return Json(RoomStyleDAO.DeleteRoomStyle(roomStyleId));
        }

        [Area("Receptionists")]
        [HttpPost]
        public IActionResult CreateRoomSize(string sizeName, string sizeShortName , int guestCount, string description)
        {
            if (!RoomSizeDAO.CheckIsExistRoomSizeByName(sizeName))
            {
                RoomSizeDAO.InsertRoomSize(sizeName, sizeShortName, guestCount, description);
                return Json(sizeName);
            }
            else
            {
                return Json(null);
            }
        }

        [Area("Receptionists")]
        [HttpPost]
        public IActionResult CheckSizeNameExists(string name)
        {
            if (RoomSizeDAO.CheckIsExistRoomSizeByName(name))
            {
                return Json(true);
            }
            else
            {
                return Json(false);
            }
        }

        [Area("Receptionists")]
        [HttpPost]
        public IActionResult UpdateRoomSize(RoomSize size)
        {
            RoomSizeDAO.UpdateRoomSize(size);
            return Json(size.RoomSizeID);
        }

        [Area("Receptionists")]
        [HttpPost]
        public IActionResult DeleteRoomSize(int roomSizeId)
        {
            return Json(RoomSizeDAO.DeleteRoomSize(roomSizeId));
        }
    }
}