const {
    Router
} = require('express')
const router = Router()

const employeeCont = require('../controlers/employees.controlers.js')

router.get('/', employeeCont.getEmployees);
router.post('/', employeeCont.createEmployee);
router.get('/:id', employeeCont.getEmployee);
router.put('/:id', employeeCont.editEmployee);
router.delete('/:id', employeeCont.deleteEmployee);

module.exports = router