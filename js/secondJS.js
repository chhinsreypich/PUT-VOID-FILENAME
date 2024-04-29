var num;
var sum;
var color;
var inStock;
var shipping;
inStock = true;
shipping = false;

color = ['white', 'black', 'yellow', 'green'];
var elColor = document.getElementById('color');
elColor.textContent = 'Color: ' + color[0];

num = [12, 64, 64, 23, 65,76]
sum = 0
var elNum = document.getElementById('number');
for (let i = 0 ; i < color.length ; i++){
  sum += num[i];
  
}
elNum.textContent = 'Sum:  ' + sum
// console.log(sum)


var stock = document.getElementById('stock');
stock.className = inStock;
// if use stock.textContent = inStock; we will get true in availble 

var ship = document.getElementById('shipping');
ship.className = shipping;

var elAvg = document.getElementById("average");

var math = 90;
var physics = 79;
var chemistry = 89;

function avg ( one,  two, three)  {
  return (one + two + three) / 3;

}
function avg ()  {
  return (math + physics + chemistry) / 3;

}
elAvg.textContent = 'Average: ' + avg(math, physics, chemistry)
