#pragma checksum "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "efd912709549f5959dc2d8cc225c9718e6baac5a"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_Receptionists_Views_Activities_Checkin), @"mvc.1.0.view", @"/Areas/Receptionists/Views/Activities/Checkin.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 6 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
using Hotel_Web.Areas.Receptionists.Models;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
using Hotel_Web.Areas.Receptionists.Data;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"efd912709549f5959dc2d8cc225c9718e6baac5a", @"/Areas/Receptionists/Views/Activities/Checkin.cshtml")]
    public class Areas_Receptionists_Views_Activities_Checkin : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<BookingModel>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/receptionists/lib/DataTables/datatables.min.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/receptionists/css/checkin.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("type", new global::Microsoft.AspNetCore.Html.HtmlString("text/javascript"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/receptionists/lib/DataTables/datatables.min.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 2 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
  
    ViewData["Title"] = "Checkin";
    Layout = "~/Areas/Receptionists/Views/_Shared/_Layout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "efd912709549f5959dc2d8cc225c9718e6baac5a5385", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "efd912709549f5959dc2d8cc225c9718e6baac5a6499", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "efd912709549f5959dc2d8cc225c9718e6baac5a7613", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"
<script type=""text/javascript"" src=""https://www.gstatic.com/charts/loader.js""></script>



<div class=""checkin-container"">
    <div class=""row top-container"">
        <div class=""col-10"" style=""font-weight: bold; font-size: 18px; margin-top: 7px;"">CHECK - IN</div>
        <div class=""col-1""><button class=""btn btn-secondary cancelCheckin"">Cancel</button></div>
        <div class=""col-1""><button class=""btn btn-primary confirmCheckin"">Confirm</button></div>
    </div>
    <div class=""row body-container"">
        <div class=""col booking-container"">
            <div class=""row title-group"">Booking Informations</div>
            <div class=""row body-group"">
                <div class=""col"">
                    <div class=""row group-item"">
                        <div class=""col text-left"">Booking ID :</div>
                        <div class=""col text-right font-weight-bold""> ");
#nullable restore
#line 31 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                                                                 Write(Model.BookingID);

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>\r\n                    </div>\r\n                    <div class=\"row group-item\">\r\n                        <div class=\"col text-left\">Booking Time :</div>\r\n                        <div class=\"col text-right font-weight-bold\"> ");
#nullable restore
#line 35 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                                                                 Write(Model.BookingDate.ToString("MM/dd/yyyy"));

#line default
#line hidden
#nullable disable
            WriteLiteral(" </div>\r\n                    </div>\r\n                    <div class=\"row group-item\">\r\n                        <div class=\"col text-left\">Arrival :</div>\r\n                        <div class=\"col text-right font-weight-bold\"> ");
#nullable restore
#line 39 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                                                                 Write(Model.CheckInDate.ToString("MM/dd/yyyy"));

#line default
#line hidden
#nullable disable
            WriteLiteral(" </div>\r\n                    </div>\r\n                    <div class=\"row group-item\">\r\n                        <div class=\"col text-left\">Departure :</div>\r\n                        <div class=\"col text-right font-weight-bold\"> ");
#nullable restore
#line 43 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                                                                 Write(Model.CheckOutDate.ToString("MM/dd/yyyy"));

#line default
#line hidden
#nullable disable
            WriteLiteral(@" </div>
                    </div>
                    <div class=""row group-item"">
                        <div class=""col text-left"">Deposit :</div>
                        <div class=""col text-right font-weight-bold"">0</div>
                    </div>
                    <div class=""row group-item"">
                        <div class=""col text-left"">Amount:</div>
                        <div class=""col text-right font-weight-bold"">");
#nullable restore
#line 51 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                                                                Write(Model.Room.RoomType.Price);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</div>
                    </div>
                </div>
            </div>
        </div>
        <div class=""col room-container"">
            <div class=""row title-group"">Room Informations</div>
            <div class=""row body-group"">
                <div class=""col"">
                    <div class=""row group-item"">
                        <div class=""col text-left"">Room ID :</div>
                        <div class=""col text-right font-weight-bold""> ");
#nullable restore
#line 62 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                                                                 Write(Model.Room.RoomID);

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>\r\n                    </div>\r\n                    <div class=\"row group-item\">\r\n                        <div class=\"col text-left\">Room Style :</div>\r\n                        <div class=\"col text-right font-weight-bold\"> ");
#nullable restore
#line 66 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                                                                 Write(Model.Room.RoomType.RoomStyle.RoomStyleName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>\r\n                    </div>\r\n                    <div class=\"row group-item\">\r\n                        <div class=\"col text-left\">Room Size :</div>\r\n                        <div class=\"col text-right font-weight-bold\"> ");
#nullable restore
#line 70 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                                                                 Write(Model.Room.RoomType.RoomSize.RoomSizeName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</div>\r\n                    </div>\r\n                    <div class=\"row group-item\">\r\n                        <div class=\"col text-left\">Room Price :</div>\r\n                        <div class=\"col text-right font-weight-bold\"> ");
#nullable restore
#line 74 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                                                                 Write(Model.Room.RoomType.Price);

#line default
#line hidden
#nullable disable
            WriteLiteral(@" </div>
                    </div>
                    <div class=""row group-item"">
                        Descriptions
                    </div>
                </div>
            </div>
        </div>
        <div class=""col guests-container"">
            <div class=""row title-group"">Guests Informations</div>
            <div class=""row body-group"">
                <div class=""col"" id=""list-guest"">
                    <div class=""row"">Checked-in 1 of 3 </div>
");
#nullable restore
#line 87 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                      
                        int i = 1;
                        var stays = StayDAO.GetStaysOfBooking(Model.BookingID);
                    

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                    <div class=\"row guest-slot justify-content-center\"> <span class=\"guest\" data-stayid=\"");
#nullable restore
#line 92 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                                                                                                    Write(stays[0].StayID);

#line default
#line hidden
#nullable disable
            WriteLiteral("\"> ");
#nullable restore
#line 92 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                                                                                                                       Write(Model.Guest.FullName);

#line default
#line hidden
#nullable disable
            WriteLiteral(" </span>  </div>\r\n\r\n");
#nullable restore
#line 94 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                     for (; i < stays.Count; i++)
                    {
                        var guest = GuestDAO.GetGuest((int)stays[i].GuestID);

#line default
#line hidden
#nullable disable
            WriteLiteral("                        <div class=\"row guest-slot justify-content-center\"> <span class=\"guest\" data-stayid=\"");
#nullable restore
#line 97 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                                                                                                        Write(stays[i].StayID);

#line default
#line hidden
#nullable disable
            WriteLiteral("\"> ");
#nullable restore
#line 97 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                                                                                                                           Write(guest.FullName);

#line default
#line hidden
#nullable disable
            WriteLiteral(" </span> <button type=\"button\" class=\"removeGuest\">X</button></div>\r\n");
#nullable restore
#line 98 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                    }

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
#nullable restore
#line 100 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                     for (; i < Model.Room.RoomType.RoomSize.GuestCount; i++)
                    {

#line default
#line hidden
#nullable disable
            WriteLiteral("                        <div class=\"row guest-slot justify-content-center\"><span class=\"add-guest\"> + </span> <button type=\"button\" class=\"HideremoveGuest\">X</button> </div>\r\n");
#nullable restore
#line 103 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                    }

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
                </div>
            </div>
        </div>
    </div>
</div>


<div class=""modal fade"" id=""exampleModal"" tabindex=""-1"" role=""dialog"" aria-labelledby=""exampleModalLabel"" aria-hidden=""true"">
    <div class=""modal-dialog"" role=""document"">
        <div class=""modal-content"">
            <div class=""modal-header"">
                <h5 class=""modal-title"" id=""exampleModalLabel"">Add New Guest</h5>
                <button type=""button"" class=""close"" data-dismiss=""modal"" aria-label=""Close"">
                    <span aria-hidden=""true"">&times;</span>
                </button>
            </div>
            <div class=""modal-body"">
                <div class=""form-group"">
                    <label for=""full name"" class=""col-form-label"">Full Name:</label>
                    <input type=""text"" class=""form-control"" id=""new-guest-name"">
                </div>
                <div class=""form-group"">
                    <label for=""gender"" class=""col-form-label"">Gender:</label>
       ");
            WriteLiteral("             <select id=\"new-guest-gender\" class=\"form-control\" name=\"gender\" required>\r\n                        <option disabled selected");
            BeginWriteAttribute("value", " value=\"", 6611, "\"", 6619, 0);
            EndWriteAttribute();
            WriteLiteral(@">-- Your gender --</option>
                        <option value=""Male"">Male</option>
                        <option value=""Female"">Female</option>
                    </select>
                </div>
                <div class=""form-group"">
                    <label for=""idcardnumber"" class=""col-form-label"">IDCardNumber:</label>
                    <input type=""text"" class=""form-control"" id=""new-guest-card"">
                </div>
            </div>
            <div class=""modal-footer"">
                <button type=""button"" class=""btn btn-secondary"" data-dismiss=""modal"">Close</button>
                <button type=""button"" class=""btn btn-primary new-guest-addbtn"">Add to room</button>
            </div>
        </div>
    </div>
</div>



<script>
    $(document).ready(function () {
        $("".new-guest-addbtn"").click(function (e) {
            var btn = $(this);
            var fullname = $(""#new-guest-name"").val();
            var gender = $(""#new-guest-gender"").val();
        ");
            WriteLiteral(@"    var idcard = $(""#new-guest-card"").val();
            if (fullname != null && fullname != """" && gender != null && gender != """" && idcard != null && idcard != """") {
                $.ajax({
                    url: ""https://localhost:44329/Receptionists/Activities/AddGuestOnCheckin"",
                    data: { FullName: fullname, Gender: gender, IdCard: idcard, bookingid: '");
#nullable restore
#line 159 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                                                                                       Write(Model.BookingID);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"' },
                    type: ""POST"",
                    dataType: ""json"",
                    success: function (response) {
                        if (response != null && response != """") {
                            location.reload();
                        }
                        else {
                            alert(""Không thể Check với khách hàng đang ở !"");
                        }
                    }
                });
            }
            else {
                alert(""Không được bỏ trống !"");
            }
        });

        $(""#new-guest-card"").focusout(function () {
            var fullname = $(""#new-guest-name"");
            var gender = $(""#new-guest-gender"");
            var idcard = $(""#new-guest-card"").val();
            debugger;
            if (idcard != null && idcard != """") {
                $.ajax({
                    url: ""https://localhost:44329/Receptionists/Guests/GetByIdCardNumber"",
                    data: { idcardnumber: idcard },
  ");
            WriteLiteral(@"                  type: ""POST"",
                    dataType: ""json"",
                    success: function (response) {
                        debugger;
                        if (response != null) {
                            fullname.val(response.fullName);
                            gender.val(response.gender);
                        }
                    }
                });
            }
        });

        $("".add-guest"").click(function () {
            $('#exampleModal').find(""input[type=text], select"").val("""");
            $('#exampleModal').modal('show');
            $(this).addClass(""add-guest-selected"");
        });

        $("".removeGuest"").click(function () {
            var stayid = $(this).parent().find("".guest"").attr(""data-stayid"");
            $.ajax({
                url: ""https://localhost:44329/Receptionists/Activities/DeleteStayOnCheckin"",
                data: { stayId: stayid },
                type: ""POST"",
                dataType: ""json"",
          ");
            WriteLiteral(@"      success: function (response) {
                    debugger;
                    location.reload();
                }
            });
        });

        $("".confirmCheckin"").click(function () {
            debugger;
            $.ajax({
                url: ""https://localhost:44329/Receptionists/Activities/ConfirmCheckin"",
                data: { bookingId: '");
#nullable restore
#line 223 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                               Write(Model.BookingID);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"' },
                type: ""POST"",
                dataType: ""json"",
                success: function (response) {
                    debugger;
                    location.reload();
                    alert(""Confirmed !"")
                }
            });
        });

        $("".cancelCheckin"").click(function () {
            debugger;
            $.ajax({
                url: ""https://localhost:44329/Receptionists/Activities/CancelCheckin"",
                data: { bookingId: '");
#nullable restore
#line 238 "C:\Users\Ngoc Hien\Desktop\Hotel_Web\Hotel_Web\Hotel_Web\Areas\Receptionists\Views\Activities\Checkin.cshtml"
                               Write(Model.BookingID);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"' },
                type: ""POST"",
                dataType: ""json"",
                success: function (response) {
                    debugger;
                    location.reload();
                }
            });

        });
    });
</script>
");
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
