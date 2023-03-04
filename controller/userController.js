var userService = require("../model/userModel");


var getDataControllerfn = (req ,res )=>
{
 console.log("hello.....");
 var empDetails = userService.getDataFromDBService();
 var bufferData = empDetails.toString();
 res.send(bufferData);
//  res.send({"status":true,"data":empDetails});
}


module.exports= {getDataControllerfn};