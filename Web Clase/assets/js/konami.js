/*
 * Konami-JS ~ 
 * :: Now with support for touch events and multiple instances for 
 * :: those situations that call for multiple easter eggs!
 * Code: http://konami-js.googlecode.com/
 * Examples: http://www.snaptortoise.com/konami-js
 * Copyright (c) 2009 George Mandis (georgemandis.com, snaptortoise.com)
 * Version: 1.4.2 (9/2/2013)
 * Licensed under the MIT License (http://opensource.org/licenses/MIT)
 * Tested in: Safari 4+, Google Chrome 4+, Firefox 3+, IE7+, Mobile Safari 2.2.1 and Dolphin Browser
 */

var secret = "38384040373937396665"; //konami code
var input = "";
var timer;
var mode = false;

$(document).keyup(function(e) {
    //alert(e.which);
    input += e.which;    
    
    clearTimeout(timer);
    timer = setTimeout(function() { input = ""; }, 1000);
    
    check_input();
});

function check_input() {
    if(input == secret) {
        //the secret code
        alert('Hola :D');
    }
}

$(document).ready(function() {
    setInterval(function() { $('#info').html('Codigo especial: ' + input); }, 100);
});