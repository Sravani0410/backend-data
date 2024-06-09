const router = require('express').Router();
const dummyDataController=require("./controller/dummyDataController")
router.get('/data', dummyDataController.getDummyData);
router.get('/services',dummyDataController.getDummyServiceData)
module.exports = router