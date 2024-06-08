const router = require('express').Router();
const dummyDataController=require("./controller/dummyDataController")

router.get('/data', dummyDataController.getDummyData);

module.exports = router