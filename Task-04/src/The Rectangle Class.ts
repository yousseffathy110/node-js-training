class Rectangle {
    private length : number;
    private width : number;

    constructor(length : number , width : number){
        this.width=width;
        this.length=length;
    }

    getLength(): number {
        return this.length;
    }

    getWidth(): number {
        return this.width;
    }

    setLength(length: number): void {
        this.length = length;
    }

    setWidth(width: number): void {
        this.width = width;
    }
    
    getArea(): number {
        return this.length * this.width;
    }
    
    getPerimeter(): number {
        return 2 * (this.length + this.width);
    }
}

const r1 = new Rectangle(1.5, 5.7)
console.log(r1.getLength());
console.log(r1.getWidth());
console.log(r1.getArea()); 
console.log(r1.getPerimeter()); 