// Closure
var myFunction = function(){
	var stringA = 'string a';

	function a(){
		return stringA;
	}

	return a;

}

var getString = myFunction();


console.log(a());
