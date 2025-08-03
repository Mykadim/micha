const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
app.use(express.json())
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Jesuschrist1@',
    database: 'testdb'
});
app.post('/login', (req, res)=>{
    const [name, age] = req.body;
    const sql = 'SELECT * FROM student WHERE name = ?, age = ?';
    db.query(sql, [name, age], (err, result)=>{
        if (err) return res.json({success : false, error: err});
        if (result.length > 0){  
            res.json({success: true, message: 'successful login'});
        }else {
            res.json({success: false, message:'unsuccesful idiot'});
        }

    });

});
app.listen(port, ()=>{
    console.log('server running at http://localhost:$[port]')
});
