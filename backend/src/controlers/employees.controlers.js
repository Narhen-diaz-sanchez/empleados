const employeeCont = {}
const Employee = require("../models/employee");

employeeCont.getEmployees = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees)
}
employeeCont.createEmployee = (req, res) => {
    res.send('create employees')
}
employeeCont.getEmployee = (req, res) => {
    res.send('get employee')
}
employeeCont.editEmployee = (req, res) => {}
employeeCont.deleteEmployee = (req, res) => {}

module.exports = employeeCont;