/**
 * Created by thesc on 8/30/2016.
 */
//Add to Github

$(document).ready(function () {
    $("#rightTextArea").hide();

    // Function to translate source text and return translated text
    function translate(sourceText) {
        $("#rightTextArea").fadeIn();
        return sourceText.toUpperCase();
    }

    $("#submitButton").click(function () {
        var sourceText = $("#source").val();
        console.log("Clicked");
        console.log(sourceText);

        $('#translated').html(translate(sourceText));
    })

});