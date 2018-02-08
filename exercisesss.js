// FUN FUN FUNCTIONS!!!

// Ex 1
// Input: name & age
// Output: 'heelo my name is ... && age is ...'
var name = "silviuLucian";
var age = 27;
// alert("Hello! My name is " + name + " and I am " + age + " years old.");

// Ex 2
// Input: 3 point objects
// Output: area of the triangle they determine

var pointA = 2;
var pointB = 4;
var pointC = 3;

// console.log(getArea(pointA, pointB, pointC));
function getArea(a, b, c) {
  var area = (a + b + c) / 2;
  return Math.sqrt(area * (area - a) * (area - b) * (area - c));
}

//Ex 3
// Input: properties of an object
// Output: object with those properties
// Example: createChair('red', 200, '20cm') => chair Object

function createCar(color, model , speed) {
  var myCar = {
    color: color,
    make: model,
    speed: speed
  };
 console.log(myCar);
  // ("I bought a new " + color + " " + model + " that has a top speed of " + speed);
}
createCar("yellow", "dacia", "1km/h"); 

// var myCar = {
//   color: "red",
//   make: "Nissan",
//   speed: "400 km/h"
// };


// 4 -- no function
// Write a code snippet which interchanges two variables.
// Before "Gooooogle'ing it", think of how you would switch water between
// two glasses
// /* Example snippet

var city1 = "Iasi";
var city2 = "Bacau";
var city = undefined;
// var x = 10;
// var y = 20;

// var x = x + y;
// var y = x - y;
// var x = x - y;

// console.log(x);
// console.log(y);

var city = city1;
var city1 = city2;
var city2 = city;

// console.log(city1); // Bacau
// console.log(city2); //Iasi
