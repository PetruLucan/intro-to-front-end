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
mul(2, 9)

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
}
