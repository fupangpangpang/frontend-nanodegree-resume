/*
This is empty on purpose! Your code to build the resume will go here.
 */


var name = "Wei Fu";
var role = "Research Associate";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/*
Below shall be deleted later
*/

var randomstring = "audacity";
var newrandomstring = randomstring.slice(1,2).toUpperCase()+randomstring.slice(2);
console.log(newrandomstring);