var shoppingCart = [
  {item: `soap`, price: 4.99},
  {item: `hammer`, price: 19.60},
  {item: `tissues`, price: 2.95},
];

//we want to create an array of prices only
//i.e data conversion/re-structuring

var prices = [];

for (var i = 0, length = shoppingCart.length; i < length; i++) {
   prices.push(shoppingCart[i].price);
}

console.log(prices); // [4.99, 19.60, 2.95]
