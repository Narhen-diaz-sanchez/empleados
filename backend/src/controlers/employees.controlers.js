const employeeCont = {}
const Employee = require("../models/employee");

employeeCont.getEmployees = async (req, res, next) => {
    const employees = await Employee.find();
    res.json(employees);
};

employeeCont.createEmployee = async (req, res, next) => {
    const employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    await employee.save();
    res.json({
        status: "Employee created"
    });
};

employeeCont.getEmployee = async (req, res, next) => {
    const {
        id
    } = req.params;
    const employee = await Employee.findById(id);
    res.json(employee);
};

employeeCont.editEmployee = async (req, res, next) => {
    const {
        id
    } = req.params;
    await Employee.findByIdAndUpdate(id, {
        $set: req.body
    }, {
        new: true
    });
    res.json({
        status: "Employee Updated"
    });
};

employeeCont.deleteEmployee = async (req, res, next) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({
        status: "Employee Deleted"
    });
};

module.exports = employeeCont;