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
// class Dolphin extends animal{
// }
