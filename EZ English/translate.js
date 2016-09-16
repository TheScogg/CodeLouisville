/**
 * Created by thesc on 9/4/2016.
 */
function translate (myString) {
    var rules = {
        1 : [/ight/, "ite"],
        2 : [/c/, "k"]
    };

    for (var i = 1; i < Object.keys(rules).length+1; i++) {
        var regex = new RegExp(rules[i][0], "g");
        console.log(regex);
        myString = myString.replace(regex, rules[i][1]);
        console.log(myString);
    }
    return "hello";
}

myString = "I'm cooking it right";

translate(myString);