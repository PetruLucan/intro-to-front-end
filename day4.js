// Decision instruction

var x = 4;

if (/* conditie */ x > 10) {
    // Executa daca conditia e adevarata
    console.log('Hoooray! Big brother!');
} else {
    console.log('Oups. Still in kindergarden!');
    // Daca conditia e falsa
}

if (x <= 10) {
    // Executa daca conditia e adevarata
    console.log('Hoooray! Big brother!');
} else {
    console.log('Oups. Still in kindergarden!');
}

var x = 10;
if (x == '10') {
    // true
}

if (x != '10') {
}

if (x === '10') {
    // false
}

if (x === 10) {
    // true
}
if (x !== 10) {
}

// Complex conditions
if ((person1.money > 100 && weather.temperature > 22) || (mother.birthday === 'today' && person1.argument === null)) {
    console.log('Go Out');
} else {
    console.log('Stay and sleep!');
}

if (today === 'friday' || person.money > 100) {
    console.log('Go Out');
} else {
    console.log('Stay and sleep!');
}

if (person1.money > 100 && weather.temperature > 22) {
    // False
} else {
    // true
}

// Daca am bani si e cald ==> ies afara
// N-am bani si e cald

if (!person1.money > 100 || !weather.temperature > 22) {
    // False -- nu ies
} else {
    //ies in oras
}

if (weather.temperature > 22) {
    if (person1.money > 100) {
        // go out
    } else {
        //stay in
    }
} else {
    // Cumapara geaca!
}

if (scor === '0-0') {
    // 50lei
} else {
    if (scor === '1-0') {
        //75
    } else {
        if (scor === '2-0') {
            //100
        } else {
        }
    }
}

if(scorDiference === 0) {

}
if( scor > 2 && scor <= 5) {
    // do something
}
if(scor > 5 ) {

}