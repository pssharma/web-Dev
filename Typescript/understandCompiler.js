"use strict";
var myname = "Max";
var myage = 27;
var anything;
anything = 12;
//myName = 23;
//compiler has been improved in typescript 2.0
//unassigned values can be caught by using "Strict Null check"
//never used parameters can also be caught by switching on "noUnusedParameters". In the below example somethingElse is not initialized so it will error
function controlMe(isTrue, somethingElse) {
    var result; //unassigned
    if (isTrue) {
        result = 23;
    }
    result = 33;
    return result;
}
