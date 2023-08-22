abstract class Shape {
    protected color: string = "red";
    protected filled: boolean = true;

    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }

    getColor(): string {
        return this.color;
    }
    setColor(color: string): void {
        this.color = color;
    }
    isFilled(): boolean {
        return this.filled;
    }
    setFilled(filled: boolean): void {
        this.filled = filled;
    }

    public abstract getArea(): number;
    public abstract getPerimeter(): number;
}

class Circle extends Shape {
  private radius: number = 1.0;

  constructor(radius: number, color: string, filled: boolean) {
    super(color, filled);
    this.radius = radius;
  }

  getRadius(): number {
    return this.radius;
  }
  setRadius(radius: number): void {
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
    private width: number = 1.0;
    private length: number = 1.0;
  
    constructor(width : number , length : number , color: string, filled: boolean) {
      super(color, filled);
      this.width = width;
      this.length=length;
    }

    getwidth() : number{
      return this.width
    }
    getlength() : number{
      return this.length
    }
    setwidth(width : number ) : void{
      this.width = width
    }
    setlength(length : number) : void{
      this.length = length
    }
    public getArea(): number {
      return this.width * this.length
    }
    public getPerimeter(): number {
      return (this.width + this.length) * 2
    }
}

class Square extends Rectangle {
    private side: number;

    constructor(side: number, color: string, filled: boolean) {
        super(side, side, color, filled);
        this.side = side;
    }
    getside() : number {
      return this.side
    }
    setside(side : number) : void{
      this.side = side
    }
    public getArea(): number {
      return (this.side ** 2)
    }
    public getPerimeter(): number {
      return (this.side) * 4
    }
}

let rec = new Rectangle(25 , 25, "red" , true)
console.log(rec.getArea())
console.log(rec.getPerimeter())


const cir = new Circle(3.4 , "yellow" , false)
console.log(cir.getArea())
console.log(cir.getPerimeter())

const SQU = new Square(10 , "teal" , true)
console.log(SQU.getArea())
console.log(SQU.getPerimeter())