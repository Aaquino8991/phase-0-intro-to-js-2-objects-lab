const employee = {name: "Anthony", streetAddress: "1216 main"}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newObj = {...employee};
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee.name = "Sam";
  employee.streetAddress = "12 Broadway";
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const cloneEmployee = {...employee};
  delete cloneEmployee[key];
  return cloneEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}