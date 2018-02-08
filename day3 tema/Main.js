var pag1 = "1";
var name = "petru";
var age = "23";
var phonenumber = "0740552962";
var married = false; //boolean
var coder = true;


//alert("Hello! my name is " + name + " i have " + age + " years old.");



//weird javaScript 2

var x= undefined;
var y= null;
//alert(typeof x);

//weird javaScript 3

//typeof x; //undefined

myphone = {
    price: "l25 lei",   
    lenght: "20cm",
    weight: "35g"
};
alert(typeof myphone);

//myphone.old = "1999";
//console.log (myphone);

var pointA ={
    x: 0,
    y: 1,
}
var pointB={
    x: 10,
    y: 11,
}

var distance = Math.sqrt((pointB.x - pointA.x)  * (pointB.x - pointA.x ) + (pointB.y - pointA.y) * (pointB.y - pointA.y) );

console.log(getDistance(pointA, pointB));


function getDistance(p1, p2){
    console.log("De la Culitzaa")
    return Math.sqrt((p1.x - p2.x)  * (p1.x - p2.x ) + (p1.y - p2.y) * (p1.y - p2.y) );


}

