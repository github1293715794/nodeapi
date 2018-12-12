const express = require('express');
const app = express();
// 推荐引入的包中都放置一个package.json文件，node将自动读取里面的配置 里面的main即是入口文件
// 利用package.json用来管理依赖：-S 生产用
// npmjs.com 社区
// 设置跨域
app.all('*',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','X-Requested-With');
	res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
	res.header('X-Powered-By','3.2.1');
	res.header('Content-Type','application/json;charset=utf-8');
	next();
})

//解析表单的插件
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: false
}))
 
 
//创建数据库连接对象
const mysql = require('mysql');
const conn = mysql.createConnection({
	host: 'localhost', //数据库地址
	user: 'root', //账号
	password: 'root', //密码
	database: 'scott', //库名
	multipleStatements: true //允许执行多条语句
});
 
 
//查询出所有数据
app.get('/api/getlist', (req, res) => {
	const sqlStr = 'select * from emp '
	conn.query(sqlStr, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: '数据不存在',
			affextedRows: 0
		})
		res.json({
			err_code: 200,
			message: results,
			affextedRows: results.affextedRows
		})
	})
});



//查询数据
app.get('/api/getlistdetl', (req, res) => {//http://localhost:3000/api/getlistdetl?sal=3000    req.query中
	const sal = req.query.sal;
	const sqlStr = 'select * from emp where sal=?'
	conn.query(sqlStr, sal, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: '数据不存在',
			affextedRows: 0
		})
		res.json({
			err_code: 200,
			message: results,
			affextedRows: results.affextedRows
		})
	})
});

//查询数据
app.get('/api/getlistdetl2/:id', (req, res) => {//http://localhost:3000/api/getlistdetl2/3000   req.params中
	const sal = req.params.id;
	console.log(sal);
	const sqlStr = 'select * from emp where sal=?'
	conn.query(sqlStr, sal, (err, results) => {
		if (err) return res.json({
			err_code: 1,
			message: '数据不存在',
			affextedRows: 0
		})
		res.json({
			err_code: 200,
			message: results,
			affextedRows: results.affextedRows
		})
	})
});
 
//添加
app.post('/api/addcard', (req, res) => {// 发送json格式的数据
	const user = req.body
	console.log(req.body)
	const sqlStr = 'insert into emp set ?'
	conn.query(sqlStr, user, (err, results) => {
		if (err){
			return res.json({
				err_code: 1,
				message: err,
				affectedRows: 0
			})
		}else{
			res.json({
				err_code: 0,
				message: '成功',
				affectedRows: results.affectedRows
			})
		}
		
	})
 
})

// 正则的应用
app.get('/api/:id', (req,res) => {
	var id = req.params.id;
	var reg = /^[\d]{6}$/;
	if(reg.test(id)){
		res.send(id);
	}else{
		res.send("请检查格式");
	}
})

// 网页只能进行get post请求
// express适合进行RESTful路由设计，delete请求一般用于软件，app
 
app.listen(3000, () => {
	console.log('正在监听端口3000,http://localhost:3000');
})