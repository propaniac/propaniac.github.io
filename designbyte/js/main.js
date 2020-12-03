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

// List button
    $('#listButton:button').click(function() {
        /* Remove any existing classes from the id's that will be altered */
        $("#termList").removeClass();
        $("#1").removeClass();
        $("#2").removeClass();
        $("#3").removeClass();
        $("#4").removeClass();
        $("#5").removeClass();

        // Alter the CSS of the icon and paragragh so icon is hidden and paragraph is shown

        $("#1i").css("display","none");
        $("#1p").css("display","block");
        $("#2i").css("display","none");
        $("#2p").css("display","block");
        $("#3i").css("display","none");
        $("#3p").css("display","block");
        $("#4i").css("display","none");
        $("#4p").css("display","block");
        $("#5i").css("display","none");
        $("#5p").css("display","block");

        /* Add the new classes to the id's */
        $("#termList").addClass("flexList");
        $("#1").addClass("list");
        $("#2").addClass("list");
        $("#3").addClass("list");
        $("#4").addClass("list");
        $("#5").addClass("list");

        /* Hide the button and display the alternative option */
        $("#listButton").css("display","none");
        $("#cardButton").css("display","block");

        // Hide the current indicator and display the new one
        $("#list-indicator").css("display","block");
        $("#card-indicator").css("display","none");
    })

    // Card button function

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

        // Alter the CSS of the icon and paragragh so paragraph is hidden and icon is shown
        $("#1p").css("display","none");
        $("#1i").css("display","block");
        $("#2p").css("display","none");
        $("#2i").css("display","block");
        $("#3p").css("display","none");
        $("#3i").css("display","block");
        $("#4p").css("display","none");
        $("#4i").css("display","block");
        $("#5p").css("display","none");
        $("#5i").css("display","block");

        /*Hide the button and display the alternative option */
        $("#cardButton").css("display","none");
        $("#listButton").css("display","block");

        // Hide the current indicator and display the new one
        $("#list-indicator").css("display","none");
        $("#card-indicator").css("display","block");
    })
