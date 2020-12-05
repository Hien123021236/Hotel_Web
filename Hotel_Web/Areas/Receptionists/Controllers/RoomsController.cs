using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hotel_Web.Areas.Receptionists.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Hotel_Web.Areas.Receptionists.Models.Rooms;

namespace Hotel_Web.Areas.Receptionists.Controllers
{
    public class RoomsController : Controller
    {   
        [Area("Receptionists")]
        public IActionResult Index()
        {

            if (!Authentication.AuthenticateByCookie(HttpContext))
                return Redirect("/Receptionists/Authentication/Login?Area=Receptionists&Ctrl=Rooms&Act=Index");

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
            RoomsManagerViewModel model = new RoomsManagerViewModel();
            model.RoomModels = RoomsDAO.GetAllRoomsModel();
            model.RoomSizes = RoomSizeDAO.GetAllRoomSize();
            model.RoomStyles = RoomStyleDAO.GetAllRoomStyle();
            model.RoomTypeModels = RoomTypeDAO.GetAllRoomTypeModel();
            return View(model);
        }
    }
}