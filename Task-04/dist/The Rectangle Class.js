"use strict";
class Rectangle {
    constructor(length, width) {
        this.width = width;
        this.length = length;
    }
    getLength() {
        return this.length;
    }
    getWidth() {
        return this.width;
    }
    setLength(length) {
        this.length = length;
    }
    setWidth(width) {
        this.width = width;
    }
    getArea() {
        return this.length * this.width;
    }
    getPerimeter() {
        return 2 * (this.length + this.width);
    }
}
const r1 = new Rectangle(1.5, 5.7);
console.log(r1.getLength());
console.log(r1.getWidth());
console.log(r1.getArea());
console.log(r1.getPerimeter());
