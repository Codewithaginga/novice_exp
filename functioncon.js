

function Circle (radius ){

    this.radius = radius;
}

//the use of prototype

Circle.prototype.getArea = function () {

    return Math.PI * Math.pow(this.radius, 2);
}

var myCircle = new Circle(10);

console.log(myCircle.getArea());

