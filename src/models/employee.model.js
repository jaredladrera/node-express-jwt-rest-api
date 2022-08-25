var dbConn = require("./../../config/db_configs");

var Employee = function(employee) {
    this.name = employee.name;
    this.lastname = employee.lastname;
    this.age = employee.age;
    this.address = employee.address;
    this.mobile_number = employee.mobile_number;
    this.email_address = employee.email_address;
    this.username = employee.username;
    this.password = employee.password;
    this.photo_url = employee.photo_url;
    this.active = employee.active;
    this.position = employee.position;
    this.department = employee.department;
    this.account_status = employee.account_status;
    this.created = new Date();
}

// create/insert new employee or register
Employee.createNewEmployee = (employeeData, result) => {
    dbConn.query('INSERT INTO user_information SET ?', employeeData, (err, res) => {
        if(err) {
            console.log('Error while inserting please check the query');
            result(null, err)
        } else {
            console.log('New Employee Inserted successfully');

            result(null, res);
        }
    })
}


Employee.getEmployees = (result) => {
    dbConn.query(`SELECT * FROM user_information`, (err, res) => {
        if(err) {
            console.log('Error while fetching EMployees', err);
            result(null, err);
        } else {
            console.log('Employee fetched success');
            result(null, res);
        }
    })
}

Employee.getEmployeeById = (id, result) => {
    dbConn.query('SELECT * FROM user_information WHERE id = ?', id, (err, res) => {
        if(err) {
            console.log('Error getting file', err);
            result(null, err);
        } else {
            result(null, res)
        }
    })
}

Employee.updateEmployee = (id, employeeData, result) => {
    const requestData = {};
    const sql = `UPDATE user_information SET ? WHERE ?`;
    
    for (const fields in employeeData) {
        // console.log(`${key} = ${value}`);
        requestData[fields] = employeeData[fields]
      }

    dbConn.query( sql, [requestData, {id: id}],
        (err, res) => {
            console.log(sql);
            if(err) {
                console.log('Error while updating the record');
                result(null, err);
            } else {
                console.log("Contact updated");
                result(null, res);
            }
        })
}

Employee.deleteEmployeeById = (id, result) => {
    dbConn.query('DELETE FROM user_information WHERE id=?', [id], (err, res) => {
        if(err) {
            console.log('Error while deleting this file');
            result(null, err);
        } else {
            result(null, res)
        }

    });
}

Employee.getUserLogin = (username, password, result) => {
    dbConn.query('SELECT * FROM user_information WHERE username=? AND password=?', [username, password], (err, res) => {
        if(err) {
            result(null, err)
        }
        return result(null, res[0]);
    })
}

module.exports = Employee;