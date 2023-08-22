abstract class animal{
    protected age : number;
    protected name : string;

    constructor(age : number , name : string){
        this.age = age
        this.name = name
    }

    set_value(name : string , age : number) : void{
        this.name = name
        this.age = age
    }

    abstract moving() : string;
    abstract eating() : string;
    abstract Age() : number;
    abstract info() : string;
}

class zebra extends animal{

    private running : boolean;

    constructor(age : number , name : string , running : boolean){
        super(age,name)
        this.running = running
    }


    set_value(name: string, age: number): void {
        this.name = name
        this.age = age
    }


    moving(): string {
        if(this.running = true){
            return "the zebra is running !!!"
        }else{
            return "zebra is sadly standing !"
        }
    }

    eating(): string {
        return "zebra is eating"
    }

    Age(): number {
        return this.age
    }

    info(): string {
        return `the zebra name is ${this.name} and its age is ${this.age} and she is eating and moving well !!!!`
    }



}

// class Dolphin extends animal{

// }