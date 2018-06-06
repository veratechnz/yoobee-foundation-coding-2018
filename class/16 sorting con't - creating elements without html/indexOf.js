// Checking if something exists in an array without indexOf()
var arr = ['Fish','Tigers','Sheep', 'Tigers', 'Horses'],
found = false;

for(var i= 0, l = arr.length; i< l; i++){
	if(arr[i] === 'Tigers'){
		found = true;
		console.log('run!');
	}
}

// By utilzing -1 in the indexOf syntax we can scan the array
// and return a true result
var sayWhat = arr.indexOf("Tigers") != -1;
console.log(sayWhat);

//Another pattern is using only the value of the item itself
console.log(arr.indexOf("Tigers", 2));