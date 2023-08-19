class employee{
    private id : number;
    private empname : string;
    private empsalary : number;


    constructor(id : number, empname : string, empsalary : number){
        this.id = id;
        this.empname = empname;
        this.empsalary = empsalary;
    }

    set employeesalary(empsalary : number){
        this.employeesalary = empsalary;
    }
}

const emp = new employee(15, "yousef", 8000);
console.log(emp);