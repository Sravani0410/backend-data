const data=require ("../db.json")
const servicedata=require ("../services.json")


exports.getDummyData = async (req, res) => {
    try {
      return res.status(200).json(data);
    } catch (err) {
     return  res.status(500).json(err);
    }
};


exports.getDummyServiceData = async (req, res) => {
    try {
      return res.status(200).json(servicedata);
    } catch (err) {
     return  res.status(500).json(err);
    }
};