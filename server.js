var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require("./app/route/index"); // 引入
routes(app); // 注册
// 处理非法url；需要放到routes注册之后，确保其只拦截合法routes外的请求
app.use(function (req, res) {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  })
})
app.listen(3333);// http://localhost:3333/todos 即可获取所有// 细节需要处理