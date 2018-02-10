//Ex 1

//input: un parametru
//output: N/A
//log-sa afiseze in consola "ceva"
//log2- sa afiseze la consola nr 2.

function log(ceva) {

    console.log(ceva);
    //console.log("2")
}
log("ceva");

//Ex 2
//input un parametru
//outout acel parametru

function identity(a) {
    return a;
}

//ex 3
//fara a crea nici o alta functie, folositi functiile
log(identity(7));

//ex 4 -sum
//input 2 numere
//output suma lor

function sum(a, b) {

    return a + b;
}
log(sum(4, 3));

//ex 5 
//input un numar
//output numarul * 2

function double(a) {
    return a * 2;

}
log(double(4));

//ex 6
var nr1 = 4;
var nr2 = 7;

//folosind doar functiile scrise, afisati in consola
//rezultatul calculului nr * 4 = 16

log(double(double(nr1)));

//ex 7
log(double(sum(nr1, nr2)));

//ex8 
//fara a folosi double sa afisam 28

log(sum(nr2, sum(nr2, sum(nr2, nr2))));

//ex9
//input 2 parameters
//outout the result of their multiplication

function mul(X, Y) {
    return X * Y
}
log(mul(2, 9));

//ex 10
//input 1 parameter
//output 15 or -15, depending on wich one is the parameter 
//closer to 

aproxF(10); //15
aproxF(-200); //-15

function aprox15(A) {

    if (A > 0) { return (15) }
    else { return (-15) }

}
aproxF(10)

//ex 11
//
//

//function aproxF(A, B) {
// if (A > 0) { return (B) }
// else { return (-B) }
//  if (-B<0)
/// return -B


//}
//log(aproxF(-1, -100))

function aproxF(x, y) {
    var min;
    var max;

    if (y < 0) { min = y }

    else { max = y }

    if (x < 0) { return min }

    else { return max }
}
//console.log(aproxF(-5, 100));

log(aproxF(1, 100));
function aproxF(a, b) {
    if (a < 0) {
        if (b < 0) {
            return b;
        } else {
            return -b;
        }
    }
    if (a > 0) {
        if (b > 0) {
            return b;
        } else {
            return -b;
        }
    }
}

function aproxF(a, b) {
    var bMin = b,
        bMax = b;

    if (b < 0) {
        bMax = -b;
    }
    else {
        bMin = -b;
    }
    //bMin -100| bMax 100
    if (a > 0) {
        return bMax;
    }
    else {
        return bMin;
    }
}//// Tema

log("Temaaaa");
//Ex1
function ex1(P) {

    if (P == 2000) { return ("2000 Comet") }
    else {
        if (P < 2000 && P > 1990) { return ("Millenials") }
        else {
            if (P < 1990) { return ("old folks") }
            else {
                if (P > 2000 && P !== 2018) { return ("New Folks") }
                else {
                    if (P == 2018) { return ("2018!!!") }
                }
            }
        }
    }
}
log(ex1(2018));

log("EX2");

//Ex 2
function ex2(p2) {

    if (p2 < 0) { return p2 }
    else { return (-p2) }
}
log(ex2(5))

log("EX3")

//Ex3
log(sum(double(mul(7, 4)), sum(7, 4)));
log(aproxF(sum(double(mul(7, 4)), sum(7, 4))));
log(sum(nr1, -nr2));

log("EX4")

//ex4

function cub(X) {
    return mul(X, mul(X, X));
}

log(cub(3))

log("EX5")

//EX 5
function min(p1, p2, p3) {
    if (p1 <= p2 && p1 <= p3) { return (p1) }
    else {
        if (p2 <= p3 && p2 <= p3) { return (p2) }
        else {
            if (p3 <= p1 && p3 <= p2) { return (p3) }
        }
    }
}
log(min(-1, 0, -3));

log("EX6")

//EX 6 
function length(a) {
    return a.length;
}
log(length("Romania"));

//Ex7
log("EX7")


function replaceF(a, b) {
    return a.replace(/Home/gi, "The kit")
}
log(replaceF("Home, Home, Welcome", "Home"));


////////OBJECTS!!!!---->>Prototypes

Object.prototype.laptop = "Blue, Notebook, Low"

//log(laptop);
var punct = {
    x: 3,
    y: 6,

}
punct.z = 5;
var P = 4;
//log(P.laptop);



var abc = "blue"

//--------Parcurgem lista

var hobbies = ["music", "somn"]

var randomStuff = [22, 'ceva', true, ['biking', 'cooking'], undefined, null];
//sa-l chemi
randomStuff[2]//->> true
randomStuff[3][1]//--> 'cooking'
randomStuff[randomStuff.length - 1]//--> ultimul element (null)
randomStuff//[orice calcul/functie~care rezultat se duce la pozitia din lista]


//metoda prin care sa parcurga lista

//for(var i = o; i < randomStuff.length; i+=1){

//}
//Passi
//var i=0 creas


var listaMea = ["litere", 123, "oua", "carne"]
for (var i = 0; i < listaMea.length; i += 1) {
    console.log(listaMea[i]);
}

var daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"]
function isDayOfTheWeek(day) {
    for (var i = 0; i < daysOfTheWeek.length + 1; i++) {
        if (day === daysOfTheWeek[i]) { return true }


    }
    return false;
}
log(isDayOfTheWeek())

//String in string

//Input: a string & array of names
//Output: all names the contain the string

function search(str, list) {
    var gol = []
    for (var i = 0; i < list.length; i += 1) {
        if (list[i].includes(str)) {
            gol.push(list[i])

        }

    }
    return gol;
}
//log(search(str, [list]))
///
function search(str, list) {
    var gol = []
    for (var i = 0; i < list.length; i += 1) {
        if (list[i].startsWith(str)) {
            gol.push(list[i])

        }

    }
    return gol;
}
log(search('alex', ['balex', 'alexandru', 'bob']))

//Ex3
// input: number & a list of numbers
//Output: only the numbers of the list wich divide with the number parameter

function filterDivide(nr1, nr2) {
    var gol = []
    for (var i = 0; i < nr2.length; i += 1) {

        if (nr2[i] % nr1 !== 0) {
            gol.push(nr2[i])
        }

    }
    return gol;
}
log(filterDivide(11, [22, 3, 55, 66]));

///

function reverse(list) {
    var rezultat = []
    for (var i = list.length - 1; i >= 0; i--) {
        rezultat.push(list[i]);
    }
    return rezultat;

}
log(reverse([3, 2, 1, 0]))

function giveMe(A1, A2) {
    var rezultat = [];
    for (var i = A1; i <= A2; i++) {
        rezultat.push(i)
    }
    return rezultat;
}

log(giveMe(10, 20))

///////Ordoneaza crescator
 function newList(list, num) {
    var rezultat = [num];
    for (var i = 0; i < list.length; i++) {
      rezultat[i + 1] = list[i];
    }
      return rezultat;
  }
  
  log(newList([3, 2, 1, 0], 4));

