// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors.
// They type vanilla,vanilla,vanilla,strawberry,coffee,coffee.
// When they view the browser console, they observe a table listing how many of each flavor they have ordered.
// In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

//prompt
let customerOrder = prompt("Welcome to Frankie's Froyos! Please use this space to enter the flavor and quantity of froyo you would like!\nLike so:\nvanilla, vanilla, vanilla, strawberry, coffee, coffee\n(This order would be for three vanilla, two coffee, and one strawberry froyo.)")

//array of strings
let orderArr = customerOrder.split(",");

//loop through array
//create object to keep count
//table to console
const orderObj = {};
orderArr.forEach(function (x) {
    orderObj[x] = (orderObj[x] || 0) + 1;
});
console.table(orderObj)
