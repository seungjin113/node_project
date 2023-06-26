const express = require('express');
const mysql= require('mysql');
const connection=mysql.createConnection({
    host: 'database-1.cpz5btnagby8.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: '11111111',
    database: 'memo',
    port: '3306',
    dateStrings:'date',
});

connection.connect(function(err){
    if(err){
        throw err; //접속에 실패하면 에러를 throw 합니다.
    }
    else {
        //데이터 베이스 생성
        // connection.query("create database memo", function(err, rows, fields) {
        //     console.log(rows); // 결과를 출력합니다!
         
        //   });
        //데이터 베이스 보기
        // connection.query("show databases",function(err,rows,fields){
        //     console.log(rows); 결과를 출력합니다
        // })
        //  connection.query("use memo",function(err,rows,fields){
        //     console.log(rows); 
        // })
        //테이블 생성
        // connection.query('create table meno (number INT NOT NULL AUTO_INCREMENT PRIMARY KEY, area VARCHAR(20) NOT NULL, name VARCHAR(50) NOT NULL, address VARCHAR(30) NOT NULL, time date NOT NULL,score INT NOT NULL);', (error, results, fields) => {
        //     if (error) throw error;
        //     console.log(results);
        //     });
       //데이터 추가
        // connection.query('insert into meno (number, area, name, address, time , score) values (1,\'부산시\',\'감천 문화 마을\',\'사하구 감내1로 200\',\'2010-01-13\',5);',(error,results,fields)=>{
        //         if (error) throw error;
        //         console.log('데이터 입력 성공!');
        //     });
        // 데이터 조회
        // connection.query('select * from meno', (error, results, fields) => {
        //         if (error) throw error;
        //         console.log(results);
        //  });
        
    }
})