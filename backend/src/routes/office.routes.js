const {
    Router
} = require('express')
const router = Router()

const officeCont = require('../controlers/office.controlers.js')

router.get('/', officeCont.getOffice);
router.post('/', officeCont.createOffice);

module.exports = router