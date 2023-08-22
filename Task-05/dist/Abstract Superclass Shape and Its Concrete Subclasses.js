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
// class square extends Rectangle{
//     private side : number
//     constructor(side : number , color: string, filled: boolean ){
//       super(color, filled)
//       this.side = side
//     }
// }
