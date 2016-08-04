function toggleChat() {
    $_Tawk.toggle();
    return false;
}

function dropdown(){
    $("#dropdown").toggle();
}

$( document ).ready(function() {
    if($(window).width() < 1100){
        //Create dropdown
        $("nav .right a").hide();
        $("#menu").show();
        $("#dropdown").hide();
    }else{
        //$("#dropdown").hide();
        //$("#menu").hide();
    }
});

$(window).resize(function() {
    if($(window).width() < 1100){
        //Create dropdown
        $("nav .right a").hide();
        $("#menu").show();
    }else{
        $("nav .right a").show();
        $("#menu").hide();
        $("#dropdown").hide();
    }
});
