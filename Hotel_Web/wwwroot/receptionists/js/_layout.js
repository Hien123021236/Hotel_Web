$(document).ready(function () {
    $(".header .user .avatar").click(function () {
        if ($(".header .user .detail-wrapper").is(':visible'))
            $(".header .user .detail-wrapper").css("display", "none");
        else
            $(".header .user .detail-wrapper").css("display", "block");
    });

    $("#logout-btn").click(function () {
        $("#comfirm-logout-modal").modal('toggle');
    });
    $("#comfirm-logout-btn").click(function () {
        window.location.href = "/Receptionists/Authentication/Logout";
    });

});