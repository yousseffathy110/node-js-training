"use strict";
class person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
}
class student extends person {
    constructor(name, address, program, year, fee) {
        super(name, address);
        this.program = program;
        this.year = year;
        this.fee = fee;
    }
    getProgram() {
        return this.program;
    }
    setProgram(program) {
        this.program = program;
    }
    getYear() {
        return this.year;
    }
    setYear(year) {
        this.year = year;
    }
    getFee() {
        return this.fee;
    }
    setFee(fee) {
        this.fee = fee;
    }
}
class staff extends person {
    constructor(name, address, school, pay) {
        super(name, address);
        this.school = school;
        this.pay = pay;
    }
    getSchool() {
        return this.school;
    }
    setSchool(school) {
        this.school = school;
    }
    getPay() {
        return this.pay;
    }
    setpay(pay) {
        this.pay = pay;
    }
}
const P = new person("yousef", "egypt");
console.log(P.getName());
P.setAddress("Alex");
console.log(P.getAddress());
const s = new student("yousef", "egypt", "swe", 2023, 25000);
const St = new staff("yousef", "egypt", "mansoura", 25000);
