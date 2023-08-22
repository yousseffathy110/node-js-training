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
class rectangle {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    getArea() {
        return this.width * this.length;
    }
    getPerimeter() {
        return (this.width + this.length) * 2;
    }
}
const C = new circle(5.7);
console.log(C.getArea());
console.log(C.getPerimeter());
