function log(ceva) {
    console.log(ceva)
}
//Ex1
log("EX 1");


function biggest(list) {
    var max = 0;
    //var a = list.length;
    for (i = 0; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    return max;
}
log(biggest([11, 3, 99]))

//Ex2
log("Ex 2")

function smallest(list) {
    var min = list[0];
    for (i = 0; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i];
        }
    }
    return min;
}
log(smallest([11, 3, 99]));

//Ex3
log("Ex3")

function sum(list) {
    var sum = 0
    for (i = 0; i < list.length; i++) {
        sum += list[i]
    }
    return sum;
}
log(sum([9, 10, 19]))

//Ex4
log("Ex4")


function palindrom(list) {
    if (list.length === 0) { return true; }
    if (list[0] !== list[list.length - 1]) { return false }
    return palindrom(list.slice(1, list.length - 1))

}
log(palindrom([7, 4, 6, 6, 4, 7]))

//Ex 5
log("Ex 5")

function reverse2(list) {
    var reversed = list.reverse();
    return reversed;
}
log(reverse2([11, 1, 3]));

//Ex 6
log("Ex 6")
//exemplu1
function indx(nr, list) {
    var index = list.indexOf(nr)
    return index;

}
log(indx(3, [0, -1, 3]))
//exemplu2
function indX(nr, list) {
    for (var i = 0; i <= list.length; i++) {
        if (nr == list[i]) {
            return i
        }
    }
    return -1
}
log(indX(4, [1, 2, 3]));

//Ex7
log("Ex 7")

function concaT(list1, list2) {
    var merge = list1.concat(list2)
    return merge;
}
log(concaT([5, 11, 89], [4, -1]));

//Ex 8 
log("Ex 8")
///de discutat
function newList(list3, list4) {
    var rezultat = [];
    for (var i = 0; i < list3.length; i++) {
        rezultat.push(list3[i])
        //rezultat[i + 1] = list3[i];

    }
    
        for (var i = 0; i < list4.length; i++) {
            rezultat.push(list4[i])
    }
    return rezultat;
}
log(newList([5, 11, 89], [4, -1]))
//Ex8
log("EX 9")

function addFirst(nr, list) {
    var rez = [];
    var n = list.unshift(nr); {
        rez = list
    }
    return rez;
}
log(addFirst(8, [11, 99, 5]));



//Ex10 de discutat
log("Ex 10")

function evenNR(nr1, nr2) {
    var rez = []
    //for (var i = nr1; i < nr2; i++) {
        while (nr1 < nr2) {
            if(nr1 % 2 == 0){
                rez.push(nr1)
            }
            nr1++;
           
        }
    
        return rez
    //}
}
log(evenNR(10, 30))
//if (nr2[i] % nr1 !== 0) {
//gol.push(nr2[i])
//}

Object.prototype.laptop = "Blue, Notebook, Low"
log(laptop)

function sorT(list) {
    for (i = 0; i <= list.length; i++) {

    }
}