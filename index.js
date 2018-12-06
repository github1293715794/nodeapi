const express = require('express');
const app = express();

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
 
app.listen(3000, () => {
	console.log('正在监听端口3000,http://localhost:3000');
})