function compare(nr1, nr2) {
    if (nr1 > nr2) { return true }
    else { return false }
};

function biggerThan10(n1, nr2) {
    if ((nr1 - nr2) > 10) { return true }
    else { return false }

}

function medianCompare(nr1, nr2, nr3) {
    if (((nr1 + nr2) / 2) > nr3) {
        return true
    }
    else return false

}

function clearRest(nr1, nr2, nr3, nr4) {
    if ((nr1 + nr2) % (nr3 + nr4) === 0) { return true }
    else { return false }
}
clearRest()
//console.log(clearRest(5, 8, 9, 2));

function parameters(nr1) {
    return nr1
}

//console.log(parameters(nr1))

