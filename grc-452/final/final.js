// Tab functions. Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_tabs_open

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

// Main js for the form

$(document).ready(function() {

    /* Commit button code */
    $('#submit').click(function() {
        
        $("#flexMain").removeClass(); // Removes the current classes. This will allow the new selections to be added, without maintaining the same classes as the previous setting. Source: https://www.tutorialspoint.com/How-to-remove-all-CSS-classes-using-jQuery#:~:text=To%20remove%20all%20classes%2C%20use,all%20of%20the%20item's%20classes.
        $("#one").removeClass();
        $("#two").removeClass();
        $("#three").removeClass();
        
        // Variables to grab the radio button values. Source: https://www.tutorialrepublic.com/faq/how-to-get-the-value-of-selected-radio-button-using-jquery.php
        var directionVal = $("input[name='direction']:checked").val();
        var justifyVal = $("input[name='justify']:checked").val();
        var alignVal = $("input[name='align']:checked").val();
        var orderVal = $("input[name='order']").val();
        
        // Adding the class for the direction based upon selected flex-direction radio
        if(directionVal === "row") { // if it's set to row, add the row class
            $("#flexMain").addClass("flexRow");
            $("#flexMain").css("height","auto"); // The default value is already set to auto, but this needs to get added just in case the user commits changes with direction set to column and then sets it to row afterward
        } else { // if it's set to column, add the column class
            $("#flexMain").addClass("flexColumn");
            $("#flexMain").css("height","720px"); // Changes the height value to a fixed height, so as to better demonstrate settings for the justification, since it wouldn't be apparent that changes were occurring if the height was set to auto when in the column setting
        };
        
        // Adding the class for the justification based upon the selected justify-content radio
        if(justifyVal === "justifyCenter") { // if it's set to justify center, add the center class
            $("#flexMain").addClass("flexJustifyCenter");
        } else if(justifyVal === "around") { // if it's set to space around, add the row around
            $("#flexMain").addClass("flexAround");
        } else if(justifyVal === "between") { // if it's set to space between, add the between class
            $("#flexMain").addClass("flexBetween");
        } else if(justifyVal === "justifyStart") { // if it's set to justify start, add the start class
            $("#flexMain").addClass("flexJustifyStart");
        } else { // if it's set to justify start, add the end class
            $("#flexMain").addClass("flexJustifyEnd");
        };
        
        // Adding the class for the alignment based upon the selected align-content radio
        if(alignVal === "baseline") { // if it's set to space around, add the row around
            $("#flexMain").addClass("flexBaseline");
        } else if(alignVal === "stretch") { // if it's set to space between, add the between class
            $("#flexMain").addClass("flexStretch");
        } else if(alignVal === "alignCenter") { // if it's set to align center, add the center class
            $("#flexMain").addClass("flexAlignCenter");
        } else if(alignVal === "alignStart") { // if it's set to align start, add the start class
            $("#flexMain").addClass("flexAlignStart");
        } else { // if it's set to align end, add the end class
            $("#flexMain").addClass("flexAlignEnd");
        };
        
        // Adding the classes for the order based upon the input in the order field
        if (orderVal === "3") { // Adjusts the classes of each object to set #1 to be the 3rd object
            $("#one").addClass("three");
            $("#two").addClass("one");
            $("#three").addClass("two");
        } else if (orderVal === "2") { // Adjusts the classes of each object to set #1 to be the 2nd object
            $("#one").addClass("two");
            $("#two").addClass("one");
            $("#three").addClass("three");
        } else { // Default order, with each object being truly sequential
            $("#one").addClass("one");
            $("#two").addClass("two");
            $("#three").addClass("three");
        }
        
    });  
    
    /* Cancel button code */
    $('#cancel').click(function() {
        document.getElementById('myForm').reset(); // Resource: https://www.w3schools.com/jsref/met_form_reset.asp

        $("#flexMain").removeClass(); // Remove any classes from the main flex box that were added when committing changes
        $("#one").removeClass(); // Removing the order classes to set it back to default
        $("#two").removeClass();
        $("#three").removeClass();
        
        $("#flexMain").addClass("flexRow flexBaseline flexJustifyCenter"); // Adds the default classes to the main flex box
        $("#flexMain").css("height","auto"); // Sets height back to auto, in case cancel is clicked after the direction is set to column
        
    });
})

/* Various references used:

https://www.tutorialrepublic.com/faq/how-to-get-the-value-of-selected-radio-button-using-jquery.php
https://api.jquery.com/addClass/
https://www.tutorialspoint.com/How-to-remove-all-CSS-classes-using-jQuery#:~:text=To%20remove%20all%20classes%2C%20use,all%20of%20the%20item's%20classes.
https://www.w3schools.com/jquery/jquery_css.asp

*/

/* Conclusion page button code */
$('#showMeTheCode').click(function() {
    $("#theCode").css("display","block"); // Simple addition to the CSS for the "theCode" id, causing it to be displayed as a block, instead of being "display: none;"
})