"use strict";
class Shape {
    constructor(color, filled) {
        this.color = "red";
        this.filled = true;
        this.color = color;
        this.filled = filled;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    isFilled() {
        return this.filled;
    }
    setFilled(filled) {
        this.filled = filled;
    }
}
class Circle extends Shape {
    constructor(radius, color, filled) {
        super(color, filled);
        this.radius = 1.0;
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(width, length, color, filled) {
        super(color, filled);
        this.width = 1.0;
        this.length = 1.0;
        this.width = width;
        this.length = length;
    }
    getwidth() {
        return this.width;
    }
    getlength() {
        return this.length;
    }
    setwidth(width) {
        this.width = width;
    }
    setlength(length) {
        this.length = length;
    }
    getArea() {
        return this.width * this.length;
    }
    getPerimeter() {
        return (this.width + this.length) * 2;
    }
}
class Square extends Rectangle {
    constructor(side, color, filled) {
        super(side, side, color, filled);
        this.side = side;
    }
    getside() {
        return this.side;
    }
    setside(side) {
        this.side = side;
    }
    getArea() {
        return (this.side ** 2);
    }
    getPerimeter() {
        return (this.side) * 4;
    }
}
let rec = new Rectangle(25, 25, "red", true);
console.log(rec.getArea());
console.log(rec.getPerimeter());
const cir = new Circle(3.4, "yellow", false);
console.log(cir.getArea());
console.log(cir.getPerimeter());
const SQU = new Square(10, "teal", true);
console.log(SQU.getArea());
console.log(SQU.getPerimeter());
