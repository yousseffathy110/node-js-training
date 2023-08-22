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

const C = new circle(5.7)
console.log(C.getArea())
console.log(C.getPerimeter())