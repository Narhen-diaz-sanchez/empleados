const officeCont = {}
const Office = require("../models/office");


officeCont.createOffice = async (req, res, next) => {
    const office = new Office({
        name: req.body.name,
    });
    await office.save();
    res.json({
        status: "office created"
    });
};

officeCont.getOffice = async (req, res, next) => {
    const office = await Office.find();
    res.json(office);
};

officeCont.deleteOffice = async (req, res, next) => {
    await Office.findByIdAndRemove(req.params.id);
    res.json({
        status: "Office Deleted"
    });
};

module.exports = officeCont;