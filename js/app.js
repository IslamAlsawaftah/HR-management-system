'use strict';
let allEmployees = [];
let form = document.getElementById('form');
let empSection = document.getElementById('empSection');
let empidStartPoint = 1000;
// constructor based form
function Employee(fullName, department, level,
    image) {
    this.id = 0;
    this.fullName = fullName;
    this.department = department;
    this.image = image;
    this.level = level;
    this.salary = 0
    allEmployees.push(this);
}
function generateId() {
    return empidStartPoint++
}
Employee.prototype.getId = function () {
    this.id = generateId();
}
Employee.prototype.calcSalary = function () {
    let min, max;
    if (this.level == "Senior") {
        min = 1500;
        max = 2000;
    }
    
    else if (this.level == "Mid-Senior") {
        min = 1000;
        max = 1500;
    }
    else {
        min = 500;
        max = 1000;
    }
    let totalSalary = generateRand(min, max);
    this.salary = totalSalary - totalSalary * 0.075
}
function generateRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
let lanaAli = new Employee("Lana Ali", "Finance", "Senior", "images/emp1.jpg")
let safiWaleed = new Employee("Safi Waleed", "Marketing", "Mid-Senior", "images/emp2.png")
let omarZaid = new Employee("Omar Zaid", "Development", "Senior", "images/emp3.png")
let ranaSalah = new Employee("Rana Salah", "Development", "Junior", "url")
let hadiAhmad = new Employee("Hadi Ahmad", "Administration", "Mid-Senior", "images/emp4.png")

function saveEmployee() {
    let formattedData = JSON.stringify(allEmployees)
    localStorage.setItem("Employees", formattedData)
}
function getData() {
    let Employees = localStorage.getItem("Employees")
    let parseEmps = JSON.parse(Employees)
    if (parseEmps != null) {
        allEmployees = [];
        for (let i = 0; i < parseEmps.length; i++) {
            new Employee(parseEmps[i].fullName, parseEmps[i].department, parseEmps[i].level, parseEmps[i].image)
        };
    }
    renderAll();
}
Employee.prototype.render = function () {

    // from task 07
    // document.write(`${this.fullName} :${this.salary}`)
    let divsec = document.createElement("div")
    divsec.setAttribute('class', "show");

    let image = document.createElement("img");
    image.setAttribute("src", this.image);
    divsec.appendChild(image);

    let name = document.createElement("h3");
    name.textContent = "Name:" + this.fullName;
    divsec.appendChild(name);

    let emplId = document.createElement("h3");
    emplId.textContent = "ID:" + this.id;
    divsec.appendChild(emplId);

    let dept = document.createElement("h3");
    dept.textContent = "Department:" + this.department;
    divsec.appendChild(dept);

    let lev = document.createElement("h3");
    lev.textContent = "Level:" + this.level;
    divsec.appendChild(lev);

    let salary = document.createElement("h3");
    salary.textContent = this.salary;
    divsec.appendChild(salary);

    empSection.appendChild(divsec)
}

form.addEventListener('submit', handelSubmit);
function handelSubmit(event) {
    event.preventDefault();
    let name = event.target.fullname.value;
    let dept = event.target.dept.value;
    let image = event.target.image.value;
    let level = event.target.level.value;
    let newEmployee = new Employee(name, dept, level, image)
    newEmployee.getId();
    newEmployee.calcSalary();
    newEmployee.render();
    saveEmployee();
    form.reset()
}
function renderAll() {
    //epmty divsec
    empSection.innerHTML = "";
    for (let i = 0; i < allEmployees.length; i++) {
        allEmployees[i].getId();
        allEmployees[i].calcSalary();
        allEmployees[i].render()
    }
}
getData();
