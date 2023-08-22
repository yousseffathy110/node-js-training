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

class Dolphin extends animal{

    private swimming  : boolean;
    private haveFriends  : boolean;

    constructor(swimming : boolean , haveFriends  : boolean , age : number , name : string){
        super(age , name)
        this.swimming = swimming
        this.haveFriends = haveFriends
    }

    moving(): string {
        if(this.swimming == true){
            return "the dolphin is swimming !!"
        }else{
            return "the dolphin is sleep !"
        }
    }

    eating(): string {
        if(this.haveFriends == true){
            return "the dolphin is eating !!"
        }else{
            return "the dolphin is lonly !"
        }
    }

    Age(): number {
        return this.age
    }

    info(): string {
        return `the dolphin ${this.name} is so happy here he is swimming and eating alot and also he is young, he's only ${this.age} so he has alot of years to live in happy`
    }

}

const Z = new zebra(18 , "wang",  true)
console.log(Z.eating())
console.log(Z.info())


const D = new Dolphin(true , true , 9 , "lizy")
console.log(D.Age())
console.log(D.info())