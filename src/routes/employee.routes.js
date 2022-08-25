const express = require('express');
const router = express.Router();
const checkingToken = require('./../auth/token_validation')

const employeeController = require('./../controller/employee.controller');

// create new employee
router.post('/', employeeController.createNewEmployee);

// get all employees
router.get('/', employeeController.getEmployees);

// get employee by id
router.get('/:id', employeeController.getEmployeeById);

// update employee
router.put('/:id', checkingToken.checkToken, employeeController.updateEmployeeById);

// delete employee by id 
router.delete('/:id', checkingToken.checkToken, employeeController.deleteContactById);

// login router
router.post('/login', employeeController.getUserLogin)

module.exports = router;