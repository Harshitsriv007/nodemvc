var express = require ("express");
var userController = require("../controller/userController")

var router = express.Router();

router.route('/user/getAll').get(function hander(req,res)
{
    console.log("hiii........");
    userController.getDataControllerfn(req,res);

})

module.exports = router;