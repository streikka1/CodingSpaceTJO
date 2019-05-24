let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};


function calculateSalary(department) {
  if (Array.isArray(department)) {
    return department.reduce((previousSum, newEmployee) => previousSum + newEmployee.salary, 0);
  }
  else {
    let salarySum = 0;
    for (let subdeparment of Object.values(department)) {
      salarySum += calculateSalary(subdeparment);
    }
    return salarySum;
  }
}

function alertSalary() { 
  alert(calculateSalary(company));
} 

function factorial(n) {
  if (n == 0) {
    return 1;    
  } else {
    return n * factorial(n-1);
  }
}