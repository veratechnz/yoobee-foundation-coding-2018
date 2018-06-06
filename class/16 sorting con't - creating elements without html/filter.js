//Filtering data without the filter method
var arr = [
    {"name":"Bk's", "count": 2},
    {"name":"Macca's", "count": 5},
    {"name":"Pizza Hutt", "count": 3},
    {"name":"Fruit and Veges", "count": 16}
];

//Notice the empty array push pattern. Very common and
//useful for pushing and filtering a new set of data. 
var newArr = [];

for(var i= 0, l = arr.length; i< l; i++){
    if(arr[i].name === "Fruit and Veges" ){
		newArr.push(arr[i]);
	}
}

console.log("Filter results:",newArr);

//Here we use the filter method
var arr = [
    {"name":"rabbits", "count": 11},
    {"name":"cats", "count": 2},
    {"name":"dogs", "count": 5},
    {"name":"rabbits", "count": 35},
    {"name":"parrots", "count": 3},
    {"name":"rabbits", "count": 2},
    {"name":"rabbits", "count": 4}
];
    
var newArr = arr.filter(function(item){
    return item.name === "rabbits";
});


console.log("Filter results:",newArr);