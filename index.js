const employee = {name: "Tony", streetAddress: "1216 State St."}

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