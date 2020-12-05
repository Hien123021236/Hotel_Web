using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hotel_Web.Areas.Receptionists.Models
{
    public class Path
    {
        public string Area { get; set; }
        public string Ctrl { get; set; }
        public string Act { get; set; }
        public string Pmt { get; set; }
        public override string ToString()
        {
            string path = "";
            if (Area != null)
            {
                path += "/" + Area;
                if (Ctrl != null)
                {
                    path += "/" + Ctrl;
                    if (Act != null)
                    {
                        path += "/" + Act;
                        if (Pmt != null)
                        {
                            path += "/" + Pmt;
                        }
                    }
                }
            }
            return path;
        }
    }
}
