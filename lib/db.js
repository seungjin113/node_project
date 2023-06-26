const mysql= require('mysql');

//연결할 DB정보 입력
const connection=mysql.createConnection({
    host: 'database-1.cpz5btnagby8.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: '11111111',
    database: 'memo',
    port: '3306',
    dateStrings:'date',
  });


  connection.connect();
  module.exports=connection;