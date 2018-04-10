// get random numbers
function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

var pages = [1,2,3,4,5,6,7,8];
var threeRandomMembers = getRandomSubarray(pages, 3);

function getRandomVisualization() {
   var x = document.getElementById("surveys");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        //x.style.display = "none";
    }
}

// new participant
function refresh() {
   document.getElementById("firstname").value = "";
   var x = document.getElementById("surveys");
   if (x.style.display === "none") {
        //x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById("demo").innerHTML = "";
    pages = [1,2,3,4,5,6,7,8];
	threeRandomMembers = getRandomSubarray(pages, 3);
	document.getElementById("demo").innerHTML = threeRandomMembers;
}

// show buttons for survey after user clicks start
function showhide() {
    var x = document.getElementById("surveys");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// open surveys 1,2,3
function showVis1() {
	var surveyone = threeRandomMembers[0]
	window.open("survey" + surveyone + ".html");
}
function showVis2() {
	var surveytwo = threeRandomMembers[1]
	window.open("survey" + surveytwo + ".html");
}
function showVis3() {
	var surveythree = threeRandomMembers[2]
	window.open("survey" + surveythree + ".html");
}


var http = require('http');
var fs = require('fs');

function submit() {
	// close the window
	// save answers and time elapsed
	// PLS SEND HELP
	fs.appendFile('answers.txt', 'Hello content!', function (err) {
  		if (err) throw err;
  		alert("Saved!");
	});
}
