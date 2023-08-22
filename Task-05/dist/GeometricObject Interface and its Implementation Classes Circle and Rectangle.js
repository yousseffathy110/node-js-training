"use strict";
class circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return (this.radius ** 2) * (Math.PI);
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
const C = new circle(5.7);
console.log(C.getArea());
console.log(C.getPerimeter());
