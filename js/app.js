'use strict';
let allEmployees = [];
let form = document.getElementById('form');
let empSection = document.getElementById('empSection');
// constructor based form
function Employee(fullName, department, image,
    level, unique) {

    this.fullName = fullName;
    this.department = department;
    this.image = image;
    this.level = level;
    this.unique = unique;
    allEmployees.push(this);
}
Employee.prototype.render = function () {
    let image = document.createElement("img");
    image.setAttribute("src", this.image);
    empSection.appendChild(image);

    let name = document.createElement("h3");
    name.textContent = this.fullName;
    empSection.appendChild(name);

    let id = document.createElement("h3");
    id.textContent = this.unique;
    empSection.appendChild(id);

    let dept = document.createElement("h3");
    dept.textContent = this.department;
    empSection.appendChild(dept);

    let level = document.createElement("h3");
    level.textContent = this.level;
    empSection.appendChild(level);

}
Employee.prototype.uniqueId = function () {
    this.unique = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
}

form.addEventListener('submit', handelSubmit);
function handelSubmit(event) {
    event.preventDefault();
    let name = event.target.fullname.value;
    let dept = event.target.dept.value;
    let image = event.target.image.value;
    let level = event.target.level.value;
    let newEmployee = new Employee(name, dept, image, level)
    newEmployee.uniqueId();
    renderAll();
}

function renderAll() {
    for (let i = 0; i < allEmployees.length; i++) {
        allEmployees[i].uniqueId();
        allEmployees[i].render();
    }
};
