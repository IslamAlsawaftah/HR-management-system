// constructor function
let empSpecs = [];
function Employee(employeeId, employeeFullName, department, level) {
    this.employeeId = employeeId,
        this.employeeFullName = employeeFullName,
        this.department = department,
        this.level = level,
        this.imagUrl = `./assets/${this.employeeFullName}.png`;
    empSpecs.push(this);
};
Employee.prototype.calcSalary = function (min, max) {
    let salary = 0;
    salary = Math.floor(Math.random() * (max - min + 1)) + min;
    salary *= 0.075; // 7.5 tax 
    switch (salary) {
        //Senior
        case salary >= 1500 || salary <= 2000:
            break;
        // Mid-Senior    
        case salary >= 1000 || salary <= 1500:
            break;
        // Junior    
        case salary >= 500 || salary <= 1000:
            break;
    }
    return salary;
};
Employee.prototype.render = function () {
    document.write(`<h1>${this.employeeFullName}</h1>`);
    document.write(`<h1>${this.calcSalary(1500, 2000)}</h1>`);
}
let emp = new Employee(1000, "Ghazi Samer", "Administration", "Senior");

for (let i = 0; i < empSpecs.length; i++) {
    empSpecs[i].render();
}