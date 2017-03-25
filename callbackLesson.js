var welcomeMsg = function() {
console.log("Welcome to the great underground empire")
}
welcomeMsg()
var start = function(callback) {
callback();
}
start(welcomeMsg)
var look = function(dir) {
if(dir === 'west') { console.log("There is a snail here"); }
if(dir === 'east') { console.log("You are standing next to a white house
  ");}
}
}
var look = function(dir) {
if(dir === 'west') { console.log("There is a snail here."); }
if(dir === 'east') { console.log("There is a house here."); }
}
var walk = function(dir) {
if(dir == 'west') { console.log("It is very dark."); }
if(dir == 'south') { console.log("deepness"); }
}
var getInput = function(param, cb) {
cb(param);
}
getInput('west', look);
getInput('east', look)
getInput('west', walk)
getInput('west', walk)
getInput('south', walk)
