const sideBarDataService = require('../service/sideBarDataService');

function setStatusCode(res,data) {
  if(data.code === 200) {
    res.statusCode = 200
  }else {
    res.statusCode = 404
  }
}

class sideBarController {
  async sideBarList (req, res) {
    const {role_name} = req.body;
    const result = await sideBarDataService.getSideBarList(role_name);
    setStatusCode(res, result)
    res.json(result);
  }
}

module.exports = new sideBarController();