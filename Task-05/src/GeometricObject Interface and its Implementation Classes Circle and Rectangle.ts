interface GeometricObject {
  getArea() : number;
  getPerimeter() : number;
}

class circle implements GeometricObject{
    private radius : number ;

    constructor(radius : number){
        this.radius = radius
    }
    getArea(): number {
        return (this.radius ** 2) * (Math.PI)
    }
    getPerimeter(): number {
        return 2 * Math.PI * this.radius
    }
}
class rectangle implements GeometricObject{
    private width : number
    private length : number
    
    constructor(width : number , length : number){
        this.width = width
        this.length  =length
    }

    getArea(): number {
        return this.width * this.length
    }
    getPerimeter(): number {
        return (this.width + this.length) * 2
    }
}
const C = new circle(5.7)
console.log(C.getArea())
console.log(C.getPerimeter())