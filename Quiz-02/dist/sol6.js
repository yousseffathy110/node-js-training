"use strict";
class animal {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    set_value(name, age) {
        this.name = name;
        this.age = age;
    }
}
class zebra extends animal {
    constructor(age, name, running) {
        super(age, name);
        this.running = running;
    }
    set_value(name, age) {
        this.name = name;
        this.age = age;
    }
    moving() {
        if (this.running = true) {
            return "the zebra is running !!!";
        }
        else {
            return "zebra is sadly standing !";
        }
    }
    eating() {
        return "zebra is eating";
    }
    Age() {
        return this.age;
    }
    info() {
        return `the zebra name is ${this.name} and its age is ${this.age} and she is eating and moving well !!!!`;
    }
}
class Dolphin extends animal {
    constructor(swimming, haveFriends, age, name) {
        super(age, name);
        this.swimming = swimming;
        this.haveFriends = haveFriends;
    }
    moving() {
        if (this.swimming == true) {
            return "the dolphin is swimming !!";
        }
        else {
            return "the dolphin is sleep !";
        }
    }
    eating() {
        if (this.haveFriends == true) {
            return "the dolphin is eating !!";
        }
        else {
            return "the dolphin is lonly !";
        }
    }
    Age() {
        return this.age;
    }
    info() {
        return `the dolphin ${this.name} is so happy here he is swimming and eating alot and also he is young, he's only ${this.age} so he has alot of years to live in happy`;
    }
}
const Z = new zebra(18, "wang", true);
console.log(Z.eating());
console.log(Z.info());
const D = new Dolphin(true, true, 9, "lizy");
console.log(D.Age());
console.log(D.info());
