$(document).ready(function () {
    setTimeout(
        function () {

            var email = "";

            if (email == "") {

                //For Guest
                $("#account a").prepend("Guest <b class=\"caret\"></b>");
                $("#account >.dropdown-menu").append("<li><a href=\"/login\">Login</a></li>");
                $("#account >.dropdown-menu").append("<li><a href=\"/register\">Register</a></li>");
            } else {
                $("#account a").prepend(email + " <b class=\"caret\"></b>");
            }

            //Display username after scripts finish
            $("#account").show();
        }, 1);
});
