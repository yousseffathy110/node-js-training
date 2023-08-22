class person{
    protected name : string
    protected address : string

    constructor(name : string , address : string){
        this.name=name
        this.address=address
    }

    getName() : string{
        return this.name
    }
    getAddress() : string{
        return this.address
    }
    setAddress(address : string) : void{
        this.address=address
    }
}

class student extends person {

    private program : string
    private year : number
    private fee : number

    constructor(name : string , address : string , program : string, year : number , fee : number) {
        super(name,address)
        this.program=program
        this.year=year
        this.fee=fee
    }

    getProgram() : string{
        return this.program
    }
    setProgram(program : string) : void{
        this.program=program
    }

    getYear() : number{
        return this.year
    }
    setYear(year : number) : void{
        this.year=year
    }

    getFee() : number{
        return this.fee
    }
    setFee(fee : number) : void{
        this.fee=fee
    }
}

class staff extends person{
    private school : string
    private pay : number

    constructor(name : string , address : string , school : string , pay : number ){
        super(name,address)
        this.school = school
        this.pay = pay
    }

    getSchool() : string{
        return this.school
    }
    setSchool(school : string) : void{
        this.school = school
    }

    getPay() : number{
        return this.pay
    }
    setpay(pay : number) : void{
        this.pay = pay
    }

}

const P = new person("yousef", "egypt")

console.log(P.getName())
P.setAddress("Alex")
console.log(P.getAddress())

const s = new student("yousef", "egypt", "swe", 2023 , 25000)
const St = new staff("yousef", "egypt", "mansoura", 25000)
