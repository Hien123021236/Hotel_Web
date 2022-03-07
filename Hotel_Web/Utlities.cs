using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewEngines;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Hotel_Web
{
    public class Utlities
    {
        public static string IntToCurrencyString(int number, string separator)
        {
            string moneyReversed = "";

            string strNumber = Math.Abs(number).ToString();

            int processedCount = 0;

            for (int i = (strNumber.Length - 1); i >= 0; i--)
            {
                moneyReversed += strNumber[i];

                processedCount += 1;

                if ((processedCount % 3) == 0 && processedCount < strNumber.Length)
                {
                    moneyReversed += separator;
                }
            }

            string money = "";

            for (int i = (moneyReversed.Length - 1); i >= 0; i--)
            {
                money += moneyReversed[i];
            }

           
            if (number < 0)
            {
                return "-" + money;
            }
            else
            {
                return money;
            }
 
        }

        public static void SendEmail(MailMessage mail)
        {          
            SmtpClient client = new SmtpClient("smtp.gmail.com");
            client.UseDefaultCredentials = true;
            client.Port = 587;
            client.EnableSsl = true;
            client.Credentials = new System.Net.NetworkCredential("hien@gmail.com", "123456");
            client.Send(mail);
        }

        public static async Task<string> RenderViewToStringAsync<Object>(Controller controller, string viewNamePath, Object model)
        {
            if (string.IsNullOrEmpty(viewNamePath))
                viewNamePath = controller.ControllerContext.ActionDescriptor.ActionName;

            controller.ViewData.Model = model;

            using (StringWriter writer = new StringWriter())
            {
                try
                {
                    IViewEngine viewEngine = controller.HttpContext.RequestServices.GetService(typeof(ICompositeViewEngine)) as ICompositeViewEngine;

                    ViewEngineResult viewResult = null;

                    if (viewNamePath.EndsWith(".cshtml"))
                        viewResult = viewEngine.GetView(viewNamePath, viewNamePath, false);
                    else
                        viewResult = viewEngine.FindView(controller.ControllerContext, viewNamePath, false);

                    if (!viewResult.Success)
                        return $"A view with the name '{viewNamePath}' could not be found";

                    ViewContext viewContext = new ViewContext(
                        controller.ControllerContext,
                        viewResult.View,
                        controller.ViewData,
                        controller.TempData,
                        writer,
                        new HtmlHelperOptions()
                    );

                    await viewResult.View.RenderAsync(viewContext);

                    return writer.GetStringBuilder().ToString();
                }
                catch (Exception exc)
                {
                    return $"Failed - {exc.Message}";
                }
            }
        }
    }
}
