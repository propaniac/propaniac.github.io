/* Menu js. Source: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp */
function headerMenu() {
    var x = document.getElementById("headerMenuLinks");
    if (x.style.display === "block") {
      x.style.display = "none";

      // Remove any styling for the menu's border.
      // While the styling isn't adjusted on load, this is acceptable given that the border styling is added on open.
      // If the style doesn't get reverted, the little circle will be visible after closing the menu; this is just a precaution.
      $("#menu").css("border","none")
    } else {
      x.style.display = "block";

      // Add border to the menu element while it's open.
      // The border is visible if the menu is closed as just a little circle, so adding it only while it's open doesn't make the element visible if it's closed.
      $("#menu").css("border","0.25em solid #bfbfbf")
    }
  }

/* Card/List view buttons */
    $('#listButton:button').click(function() {
        /* Remove any existing classes from the id's that will be altered */
        $("#termList").removeClass();
        $("#1").removeClass();
        $("#2").removeClass();
        $("#3").removeClass();
        $("#4").removeClass();
        $("#5").removeClass();

        /* Add the new classes to the id's */
        $("#termList").addClass("flexList");
        $("#1").addClass("list");
        $("#2").addClass("list");
        $("#3").addClass("list");
        $("#4").addClass("list");
        $("#5").addClass("list");

        /*Hide the button and display the alternative option */
        $("#listButton").css("display","none");
        $("#cardButton").css("display","block");
    })

    $('#cardButton:button').click(function() {
        /* Remove any existing classes from the id's that will be altered */
        $("#termList").removeClass();
        $("#1").removeClass();
        $("#2").removeClass();
        $("#3").removeClass();
        $("#4").removeClass();
        $("#5").removeClass();

        /* Add the new classes to the id's */
        $("#termList").addClass("flexCard");
        $("#1").addClass("card");
        $("#2").addClass("card");
        $("#3").addClass("card");
        $("#4").addClass("card");
        $("#5").addClass("card");

        /*Hide the button and display the alternative option */
        $("#cardButton").css("display","none");
        $("#listButton").css("display","block");
    })
