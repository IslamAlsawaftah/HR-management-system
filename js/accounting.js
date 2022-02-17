'use strict';
let allData = [];
let table = document.getElementById("table");
// constructor 
function Data(department, numOfEmployees, totalSalary,
    averageSalary) {
    this.department = department;
    this.numOfEmployees = numOfEmployees;
    this.totalSalary = totalSalary;
    this.averageSalary = averageSalary;
    allData.push(this);
}

function renderHeader() {
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let depts = document.createElement('th');
    depts.textContent = "Department";
    tr.appendChild(depts);

    let numOfEmp = document.createElement('th');
    numOfEmp.textContent = "# Of Employees";
    tr.appendChild(numOfEmp);

    let totalSal = document.createElement('th');
    totalSal.textContent = "Total Salary";
    tr.appendChild(totalSal);

    let averSal = document.createElement('th');
    averSal.textContent = "Average Salary";
    tr.appendChild(averSal);
}

Data.prototype.renderTableBody = function () {

    let tr = document.createElement("tr");
    table.appendChild(tr);

    let dept = document.createElement("td");
    dept.textContent = this.department;
    tr.appendChild(dept);

    let numberOfEmp = document.createElement("td");
    numberOfEmp.textContent = this.numOfEmployees;
    tr.appendChild(numberOfEmp);

    let totalSal = document.createElement("td");
    totalSal.textContent = this.totalSalary;
    tr.appendChild(totalSal);

    let averageSalary = document.createElement("td");
    averageSalary.textContent = this.averageSalary;
    tr.appendChild(averageSalary);
};

function renderBody() {
    table.innerHTML = "";
    renderHeader();
    for (let i = 0; i < allData.length; i++) {
        allData[i].renderTableBody();
    }

}

function getData() {
    let Employees = localStorage.getItem("Employees")
    let parseEmps = JSON.parse(Employees)
    if (parseEmps != null) {
        for (let i = 0; i < parseEmps.length; i++) {
            new Data(parseEmps[i].department,parseEmps[i].numOfEmp, parseEmps[i].totalSalary, parseEmps[i].averageSalary)
            parseEmps[i].department == ""
        };
        
    }
}

getData();
renderBody();