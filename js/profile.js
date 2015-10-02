$(document).ready(function () {
    setTimeout(
        function () {

            var email = "";

            if (email == "") {

                //For Guest
                $("#account a").prepend("Guest <b class=\"caret\"></b>");
                $("#account >.dropdown-menu").append("<li><a href=\"#\" id=\"loginLink\">Login\/Register</a></li>");
            } else {
                $("#account a").prepend(email + " <b class=\"caret\"></b>");
            }

            //Display username after scripts finish
            $("#account").show();
            $("#loginLink").click(function (event) {
                event.preventDefault();
                $(".overlay").fadeToggle("fast");
            });

            $(".close").click(function () {
                $(".overlay").fadeToggle("fast");
            });

            $(document).keyup(function (e) {
                if (e.keyCode == 27 && $(".overlay").css("display") != "none") {
                    event.preventDefault();
                    $(".overlay").fadeToggle("fast");
                }
            });
        }, 1);
});
