window.dedgeWidgetsResourceBaseUrl = 'https://websdk.fastbooking-services.com/widgets/';
var onVendorLoaded = function() {
    var script = document.createElement('script');
    script.src = window.dedgeWidgetsResourceBaseUrl + '_app.js';
    document.head.appendChild(script);
}
var vendorScript = document.createElement('script');
vendorScript.src = window.dedgeWidgetsResourceBaseUrl + 'vendor.js';
vendorScript.onload = onVendorLoaded;
document.head.appendChild(vendorScript);