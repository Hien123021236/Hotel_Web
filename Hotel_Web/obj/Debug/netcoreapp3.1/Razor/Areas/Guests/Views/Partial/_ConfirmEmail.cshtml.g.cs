#pragma checksum "C:\Users\ngoch\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Guests\Views\Partial\_ConfirmEmail.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "ae314a8d151aea017358e3e4cc8d02f31df32e00"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(Hotel_Web.Areas.Guests.Models.Areas_Guests_Views_Partial__ConfirmEmail), @"mvc.1.0.view", @"/Areas/Guests/Views/Partial/_ConfirmEmail.cshtml")]
namespace Hotel_Web.Areas.Guests.Models
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ae314a8d151aea017358e3e4cc8d02f31df32e00", @"/Areas/Guests/Views/Partial/_ConfirmEmail.cshtml")]
    public class Areas_Guests_Views_Partial__ConfirmEmail : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<BookingModel>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral(@"
<table width=""600"" border=""1"" bordercolor=""99CCFF"">
    <tbody>
        <tr>
            <td colspan=""5"" bordercolor=""99CCFF"" bgcolor=""99ccff"">
                <div align=""center"">
                    <p class=""style3"">Booking confirmation</p>
                </div>
            </td>
        </tr>
        <tr><td colspan=""5"" bordercolor=""99CCFF"" bgcolor=""99ccff""><img src=""https://qt5geq.dm2301.livefilestore.com/y2pl-847aAnH1V3nJ1wjwOtYzwYYXuEoKWNsarAPxVy50tg5HOwtwSqyfVIkmh522Tpr575Jh2djOAVCxbTYkhwTtu5GlmNxYEjxJXuFIC8QJ8/Navajo%20header%20web.png?psid=1"" alt=""Header"" width=""600"" height=""188"" longdesc=""https://qt7hhq.dm1.livefilestore.com/y2pDJs-GHos35inDJBFRa9oltST_jn-fVpZMBewP-Qp5StrXMkOZVuIxKMCfB_6rnHAD0rdd0dzIdjfbYOelVEdQYZWVkoudm0teMf24Cb7UE4/Navajo%20header%20new.jpg?psid=1""></td></tr>
        <tr><td colspan=""5"" bordercolor=""99CCFF"" bgcolor=""99ccff""><div align=""left"">");
#nullable restore
#line 14 "C:\Users\ngoch\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Guests\Views\Partial\_ConfirmEmail.cshtml"
                                                                                     if (Model.Guest.Gender == "Male")
        {

#line default
#line hidden
#nullable disable
            WriteLiteral("<strong>Dear Mr. ");
#nullable restore
#line 15 "C:\Users\ngoch\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Guests\Views\Partial\_ConfirmEmail.cshtml"
                     Write(Model.Guest.FullName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</strong> ");
#nullable restore
#line 15 "C:\Users\ngoch\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Guests\Views\Partial\_ConfirmEmail.cshtml"
                                                         }
    else
    {

#line default
#line hidden
#nullable disable
            WriteLiteral("<strong>Dear Ms. ");
#nullable restore
#line 17 "C:\Users\ngoch\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Guests\Views\Partial\_ConfirmEmail.cshtml"
                 Write(Model.Guest.FullName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</strong>");
#nullable restore
#line 17 "C:\Users\ngoch\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Guests\Views\Partial\_ConfirmEmail.cshtml"
                                                    }

#line default
#line hidden
#nullable disable
            WriteLiteral(@"<br><br>Thank you for choosing The Hotel. We are delighted to confirm the following reservation. Should you require further assistance, please contact our Reservations department via return e-mail or by calling the number listed below.<br></div></td></tr>
        <tr><td colspan=""5"" bordercolor=""99CCFF"" bgcolor=""#ffc977""><div align=""left""><strong>Booking Details:</strong></div></td></tr>
        <tr><td width=""121"" bordercolor=""99CCFF"" bgcolor=""99ccff""><div align=""left""><span class=""style4"">Guest Name</span></div></td><td width=""473"" colspan=""4"" bordercolor=""99CCFF"" bgcolor=""99ccff"">&nbsp;");
#nullable restore
#line 19 "C:\Users\ngoch\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Guests\Views\Partial\_ConfirmEmail.cshtml"
                                                                                                                                                                                                        Write(Model.Guest.FullName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td></tr>\r\n        <tr><td bordercolor=\"99CCFF\" bgcolor=\"99ccff\"><div align=\"left\"><span class=\"style4\">Arrival Date</span></div></td><td colspan=\"4\" bordercolor=\"99CCFF\" bgcolor=\"99ccff\">&nbsp;");
#nullable restore
#line 20 "C:\Users\ngoch\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Guests\Views\Partial\_ConfirmEmail.cshtml"
                                                                                                                                                                                  Write(Model.CheckInDate);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td></tr>\r\n        <tr><td bordercolor=\"99CCFF\" bgcolor=\"99ccff\"><div align=\"left\"><span class=\"style4\">Departure Date</span></div></td><td colspan=\"4\" bordercolor=\"99CCFF\" bgcolor=\"99ccff\">&nbsp;");
#nullable restore
#line 21 "C:\Users\ngoch\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Guests\Views\Partial\_ConfirmEmail.cshtml"
                                                                                                                                                                                    Write(Model.CheckOutDate);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td></tr>\r\n        <tr><td bordercolor=\"99CCFF\" bgcolor=\"99ccff\"><div align=\"left\"><span class=\"style4\">Room Type</span></div></td><td colspan=\"4\" bordercolor=\"99CCFF\" bgcolor=\"99ccff\">&nbsp;");
#nullable restore
#line 22 "C:\Users\ngoch\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Guests\Views\Partial\_ConfirmEmail.cshtml"
                                                                                                                                                                               Write(Model.Room.RoomType.Description);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td></tr>\r\n        <tr><td bordercolor=\"99CCFF\" bgcolor=\"99ccff\"><div align=\"left\"><span class=\"style4\">Payment Method</span></div></td><td colspan=\"4\" bordercolor=\"99CCFF\" bgcolor=\"99ccff\">&nbsp;");
#nullable restore
#line 23 "C:\Users\ngoch\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Guests\Views\Partial\_ConfirmEmail.cshtml"
                                                                                                                                                                                    Write(Model.Payment.CVC);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td></tr>\r\n        <tr><td bordercolor=\"99CCFF\" bgcolor=\"99ccff\"><div align=\"left\"><span class=\"style4\">Guest Count</span></div></td><td colspan=\"4\" bordercolor=\"99CCFF\" bgcolor=\"99ccff\">&nbsp;");
#nullable restore
#line 24 "C:\Users\ngoch\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Guests\Views\Partial\_ConfirmEmail.cshtml"
                                                                                                                                                                                 Write(Model.Room.RoomType.RoomSize.GuestCount);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</td></tr>
        <tr><td colspan=""5"" bordercolor=""99CCFF"" bgcolor=""#ffc977""><div align=""left""><strong>Hotel Policy:</strong></div></td></tr>
        <tr><td bordercolor=""99CCFF"" bgcolor=""99ccff""><div align=""left"" class=""style4"">Hotel Check-in</div></td><td colspan=""4"" bordercolor=""99CCFF"" bgcolor=""99ccff""><div align=""left""><span class=""style5"">14:00</span></div></td></tr>
        <tr><td bordercolor=""99CCFF"" bgcolor=""99ccff""><div align=""left"" class=""style4"">Hotel Check-out</div></td><td colspan=""4"" bordercolor=""99CCFF"" bgcolor=""99ccff""><div align=""left""><span class=""style5"">12:00</span></div></td></tr>
        <tr><td bordercolor=""99CCFF"" bgcolor=""99ccff""><div align=""left""><span class=""style4"">Cancellation Policy</span></div></td><td colspan=""4"" bordercolor=""99CCFF"" bgcolor=""99ccff""><div align=""left""><span class=""style5"">Guaranteed reservations cancelled within 48 hours of arrival will be subject to a one night charge</span></div></td></tr>
        <tr><td colspan=""5"" bordercolor=""99CCFF"" bgcolor=""99cc");
            WriteLiteral(@"ff""><div align=""left""><p><a href=""https://plus.google.com/u/0/b/117594236911625347964/117594236911625347964"" target=""_parent""><img src=""https://qt4qka.dm2301.livefilestore.com/y2pujRNn1ou36DmrFCDEYaz7p56ysUR48iuhTeuJmgdUC2inysUcpxhSoXAFXeKV1cZEdsgYz4t30Ew5hc-D5GgXMC8FNUtQ3pSFfuOnEVxNOM/googleplus1.gif?psid=1"" alt=""G+"" width=""41"" height=""40"" longdesc=""https://qt4qka.dm2301.livefilestore.com/y2pujRNn1ou36DmrFCDEYaz7p56ysUR48iuhTeuJmgdUC2inysUcpxhSoXAFXeKV1cZEdsgYz4t30Ew5hc-D5GgXMC8FNUtQ3pSFfuOnEVxNOM/googleplus1.gif?psid=1""></a><a href=""https://www.facebook.com/Setupmyhotel"" target=""_parent""><img src=""https://c1uttq.dm1.livefilestore.com/y2p33eMblEybFJiF73eZsNTiC9-rOMfgyH567MjxzqsxQ7PMrteOunVgc5FtvLoqYUA55L0ARvV7WNXj-zaTSZ1Svvy-Ah2qsKoZv-yEfCpiMc/facebook1.gif?psid=1"" alt=""facebook"" width=""41"" height=""40"" longdesc=""https://c1uttq.dm1.livefilestore.com/y2p33eMblEybFJiF73eZsNTiC9-rOMfgyH567MjxzqsxQ7PMrteOunVgc5FtvLoqYUA55L0ARvV7WNXj-zaTSZ1Svvy-Ah2qsKoZv-yEfCpiMc/facebook1.gif?psid=1""></a><a href=""https://twitter.");
            WriteLiteral(@"com/Setupmyhotel"" target=""_self""><img src=""https://c1uttq.dm1.livefilestore.com/y2pP56DZ3bJ8jcCimnekyWnzlBwlpatx-Pi_vs8P1JoWsnNsROGZArqMB5huPO2cfTZ_dxfrYRJSJK6DM0g65cgP0hQnm7WUtgg1LXbd2UttXs/twitter1.gif?psid=1"" alt=""twitter"" width=""41"" height=""40"" longdesc=""https://c1uttq.dm1.livefilestore.com/y2pP56DZ3bJ8jcCimnekyWnzlBwlpatx-Pi_vs8P1JoWsnNsROGZArqMB5huPO2cfTZ_dxfrYRJSJK6DM0g65cgP0hQnm7WUtgg1LXbd2UttXs/twitter1.gif?psid=1""></a></p><p align=""left"">The Hotel ORFILAR. <a href=""https://www.myhotel.com"" target=""_self"">www.myhotel.com</a> | admin@myhotel.com</p></div></td></tr>
    </tbody>
</table>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<BookingModel> Html { get; private set; }
    }
}
#pragma warning restore 1591