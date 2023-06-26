const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const connection=require('./lib/db');
const app = express();

// connection.connect();

app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(express.static(`${__dirname}/public`));


app.get('/', (request, response) => {
    fs.readFile('public/memo.html', 'utf-8', (error, data) => {
        connection.query('SELECT * from meno', (error, results, fields) => {
            if (error) throw error;
            response.send(ejs.render(data, {
                data: results,
            }));    
        });
    });
});

//추가

app.get('/create',(request, response) => {
    fs.readFile('public/memocreate.html','utf-8',(error, data) => {
      if(error) throw error;
      response.send(data);
    })
  })
  app.post('/create', (request, response) => {
    const body = request.body;
    connection.query('INSERT INTO meno (number, area, name, address, time, score) VALUE (?, ?, ?, ?, ?, ?)',
    [body.number, body.area, body.name, body.address,body.time,body.score], () => {
        response.redirect('/');
    });
});

//수정
app.get('/modify/:id', (request, response) => {
    // 파일을 읽어옵니다.
    fs.readFile('public/memoupdate.html', 'utf-8', (error, data) => {
      connection.query('SELECT * from meno WHERE number =?', [request.params.id], (error, results) => {
        if (error) throw error;
        console.log(request.params.id);
        response.send(ejs.render(data, {
          data: results[0],
        }));
      });
    });
  });
  app.post('/modify/:id', (request, response) => {
    const body = request.body;
    connection.query('UPDATE meno SET number = ?, area = ?, name = ?, address = ?, time = ?, score = ? WHERE number = ?',
    [body.number, body.area, body.name, body.address, body.time, body.score, request.params.id], (error, results) => {
        if (error) throw error;
        // 조회페이지로 이동
        response.redirect('/');
    });
});

//삭제
app.get('/delete/:id', (request, response) => {
    connection.query('DELETE FROM meno where number=?', [request.params.id], () => {
      // 조회 페이지로 이동
      response.redirect('/');
    });
});
// 테이블 생성
// connection.query('create table meno (number INT NOT NULL, area VARCHAR(20) NOT NULL, name VARCHAR(50) NOT NULL, address VARCHAR(30) NOT NULL, time date NOT NULL,score INT NOT NULL);', (error, results, fields) => {
//         if (error) throw error;
        
//     });

//데이터 입력
// connection.query('insert into meno (number, area, name, address, time , score) values (1,\'부산시\',\'감천 문화 마을\',\'사하구 감내1로 200\',\'2010-01-13\',5);',(error,results,fields)=>{
//     if (error) throw error;
//     console.log('데이터 입력 성공!');
// });
//데이터조회
// connection.query('select * from meno', (error, results, fields) => {
//     if (error) throw error;
//     console.log(results);
//  });


// connection.end();
app.listen(3000, () => {
    console.log('Server is running port 3000!');
    
});