function flightOne(JKIA) {

    JKIA = JKIA || "Ethiopian Airline";
    console.log("Terminal one is taking passenger from " + JKIA);
}

flightOne();

var x = 10;
if ( (null) || (console.log("Hello")) || x > 5 ) {
  console.log("Hello");
}

function makeMultiplier(multiple) {

    let myFunc = function (x) {

        return multiple * x
    };

    return myFunc;
}

let inside = makeMultiplier(3)
console.log(inside(10));
