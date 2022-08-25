const EmployeeModel = require('./../models/employee.model');
const { compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');
// import { sign } from "jsonwebtoken";
// import { sign } from "jsonwebtoken"

exports.createNewEmployee = (req, res) => {

    const employeeData = new EmployeeModel(req.body);
    console.log(employeeData);
    if (Object.keys(req.body).length === 0) {
        res.send(400).send({
            success: false, 
            message: 'Please fill all fields'
        })
    } else { 
        EmployeeModel.createNewEmployee(employeeData, (err, contact) => {
            if(err) 
                 res.send(err)
            res.json({status: true, message: 'Created Successfully', data: contact});
        })
    }
}

exports.getEmployees = (req, res) => {
    EmployeeModel.getEmployees((err, employees) => {
        if(err) res.send(err)
        // console.log('Contact', contacts);

        res.send(employees);
    })
}

exports.getEmployeeById = (req, res) => {
    EmployeeModel.getEmployeeById(req.params.id, (err, employee) => {
        if(err) 
            res.send(err)
        console.log('single employee', employee);
        res.send(employee)
    });
}

exports.updateEmployeeById = (req, res) => {
    const employeeRequestData = req.body

    if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({
            success: false, 
            message: 'Please fill all fields'
        })
    } else {
        EmployeeModel.updateEmployee(req.params.id, employeeRequestData, (err, employee) => {
            if(err) 
                res.send(err)
            res.json({status: true, message: 'Updated Successfully', data: employee});
        })
    }
}

exports.deleteContactById = (req, res) => {
    EmployeeModel.deleteEmployeeById(req.params.id, (err, employee) => {
        if(err) res.send(err)
        res.json({status: true, message: 'Deleted successfully'})
    })
}

exports.getUserLogin = (req, res) => {
    const body = req.body;
    // console.log(body)
    EmployeeModel.getUserLogin(body.username, body.password, (err, results) => {
        if (err) {
            res.send(err)
        }
        if (!results) {
            return res.json({
                success: 0,
                data: "Invalid email and password"
            })
        }

        // this is only use for encrypt password
        // const result = compareSync(body.password, results.password)
        
            results.password = undefined;
            const jsontoken = sign({ result: results }, "employeeLogin", {
                expiresIn: "1h"
            });
            return res.json({
                success: 1,
                message: "Login successfully",
                user_id: results.id,
                token: jsontoken
            });

    })
}