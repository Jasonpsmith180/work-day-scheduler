// Add current date to header
$("#currentDay").text(moment().format("dddd") + " " + moment().format("MM-DD-YYYY"));

// Scheduler user interaction function
$(document).ready(function() {

    // Get textarea input and its corresponding hour
    $("button").click(function() {
        input = $(this).siblings(".description").val();
        hour = $(this).parent().attr("id");
        
        // save hour and input to local storage
        localStorage.setItem(hour, input);
    });

    // Get saved items from local storage if there are any
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    // Function to track time
    function trackTime() {
        // Get current hour
        var currentTime = moment().hour();

        // loop through time-block divs
        $(".time-block").each(function() {
            // Split the set hour out of the id of the time-block div  
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            // Compare timeBlock value to currentTime and add css classes based on the value
            if (timeBlock < currentTime) {
                // if timeBlock is less than the currentTime set its class to past
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } else if (timeBlock === currentTime) {
                // if timeBlock is equal to the currentTime set its class to present
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            } else {
                // else timeBlock is greater than the currentTime set its class to future
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
        });
    }

    trackTime();
});

// Auto refresh at the top of each hour
var current = new Date();
var future = new Date();
future.setTime(future.getTime() + 3600000);
future.setMinutes(0);
future.setSeconds(0);

var timeout = (future.getTime() - current.getTime());
setTimeout(function() {window.location.reload(); }, timeout);