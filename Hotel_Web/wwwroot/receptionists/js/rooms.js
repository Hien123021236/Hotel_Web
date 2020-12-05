window.setInterval(function () {
    var now = new Date();
    $("#datetime").html(now.toLocaleString());
}, 1000);

$(document).ready(function () {
    

    $(".options-btn").click(function () {
        $(this).parent().find(".options-hidden-container").css("display", "block");
    });

    $(document).click(function () {
        
       
    });
});


