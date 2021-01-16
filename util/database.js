const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'024595094+Aa'
})

module.exports=pool.promise();