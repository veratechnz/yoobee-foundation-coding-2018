//Defining variables to store coordinates of start and ending locations.  These are called above in the getRoute function
var start = [];
var end = [];
//Finding the start location coordinates depending on what the user input was.  This is called in the click function above
function startLocation() {
	if (pickupLocation.value === "auckland") {
		start =[174.763332, -36.848460]
	}else if(pickupLocation.value === "wellington"){
		start =[174.776236, -41.286460]
	}else if(pickupLocation.value === "queenstown"){
		start =[168.662644, -45.031162]
	}
}
//Finding the end location coordinates depending on what the user input was. This is called in the click function above
function endLocation () {
	if (dropoffLocation.value === "auckland") {
		end = [174.763332, -36.848460]
	}else if(dropoffLocation.value === "wellington"){
		end = [174.776236, -41.286460]
	}else if(dropoffLocation.value === "queenstown"){
		end = [168.662644, -45.031162]
	}
}
