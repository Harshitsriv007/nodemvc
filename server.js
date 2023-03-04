var express = require("express");

var app = express();
var router = require("./router/routes");
process.env.PORT = 8000;
app.use(router);


app.listen(process.env.PORT,function check(error)
{
if(error)
{
    console.log(error);
}
else
{
    console.log(`server started ${process.env.PORT}`);
}
});