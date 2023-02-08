// 导入数据模块
const mysql = require('mysql2')
// 建立连接
const db = mysql.createPool({
     host:'127.0.0.1',
     user:'root',
     password:'123456',
     database:'app-manager'
})

// 使用
const test = db.query('select 1 ' ,(err , ret) => {
    if(err) return console.log(err.message);
    console.log(ret);
})

export const queryAll = db.query('select * from user')