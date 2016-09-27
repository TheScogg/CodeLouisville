/**
 * Created by Chris on 9/16/2016.
 */
console.log("JS Running");



$(document).ready(function () {
    //This action is to allow a user to create their own custom activity buttons and add them.

    var created_activities = [];

    $("#submit_button").click('on', function () {


        var input_value = $("#activity_creation").val(); 
        created_activities.push(input_value);
        console.log(created_activities);


    
        var test = $("#test_receiving_container");
        $.each(created_activities, function(index, value) {
            test.push('<span>' + value + '</span>');
        });

    });

    //

    //Master List of activities, will eventually be pulled from MongoDB
    var activities = {
        0: ["Cleaned house / car", "good"],
        1: ["Worked Out / Ran", "good"],
        2: ["Smoked Cigarettes", "bad"],
        3: ["Drank Alcohol", "bad"],
        4: ["Watched Television", "neutral"],
        5: ["Did a Hobby", "neutral"]
    };

 



    var colors = ['#C72113', '#9E5218', '#935116', '#CB4335', '#196F3D', '#B9770E', '#27AE60', '#F4D03F', '#1A5276', '#633974', '#48C9B0', '#AF7AC5'];

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Randomize button colors for aesthetics. 'Good buttons' at top of spectrum, 'Bad buttons' at bottom of spectrum//
    var randButtonColors = function () {
        var random = Math.random().toString(16).slice(2, 8).toUpperCase();
        console.log(random);
        return random;
    };

    //Select black or white button text, depending on background color
    function getContrastYIQ(hexcolor){
        var r = parseInt(hexcolor.substr(0,2),16);
        var g = parseInt(hexcolor.substr(2,2),16);
        var b = parseInt(hexcolor.substr(4,2),16);
        var yiq = ((r*299)+(g*587)+(b*114))/1000;
        return (yiq >= 131.5) ? 'black' : 'white';
    }

    //Draw buttons for daily activities
    var drawButtons = function (activities) {
        //Get length of activities list. For some reason, I can't just put Object.keys(activities).length in middle of for loop. Fix?

        //create div for buttons inside .generateActivityButtons after <span>
        //var button = $(".generateActivityButtons").append('<button e="button" class="btn btn-primary">' + activities[i][0] + '</button>');
            //Creating button element, finding BG Color, and Text Color
            var bgHexColor = randButtonColors();
            var textColor = getContrastYIQ(bgHexColor);
            button = $('<button type="button" class="btn btn-primary unselected">' + activities[i][0] + '</button>')
                .css({"background-color":"#" + bgHexColor,
                        "color": textColor,
                        "font-weight" : "bold"});
            $(".generateActivityButtons").append(button);
        }

    };

    //Propagate activity buttons
    drawButtons(activities);
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //PROPOGATE SURVEY & BUBBLES (RADIO TAG)//
    var drawSurvey = function () {
        //Create each individual survey question and radio form
        var radio_location = 1;

        $survey = $('<form action=""></form>');
        for (var i = 0; i<10; i++) {
            $($survey).append(radio_location + '  <input type=radio name="bill" style="margin-right:10px;">');

            radio_location++;
        }

        //Propogate survey lines to each question - phsysical, mental, psychological
        $('.drawSurvey').find("div").append($survey);

    };

    drawSurvey();

    //On Click, moves activity buttons back and forth from .generateActivityButtons & activityHolder
    $(".btn").click('on', function () {
        if ($( this ).parent().hasClass("generateActivityButtons")) {
            $(".activityHolder").append(this);
        } else if ($( this ).parent().hasClass("activityHolder")) {
            $(".generateActivityButtons").append(this);
        }
    });

    //Implement adding custom activities : Accepts a new acitivity button name, and adds it to the 'activities' list.
    //To Add : Create new button and add to activity selection div
    $("#addToList_button").click('on', function () {
        keyName = 0;
       for (numberOfProps in activities) {
           keyName++;
       }

        activities[keyName] = [$('#activity_creation').val()];
        drawButtons(activities[keyName][0]);
    });
});





//Need login system via php
//Chart.js to plot happiness vs sadness activities based on date
//Have user select date and show based on activities what the user rated them






//Exceptions
/*

var char_except_1 = "ch";
var char_except_2 = "x";

var string_parse = 
if string parse = char_except_2;








*/