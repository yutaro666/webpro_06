const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  
  let judgement = "引き分け";
  if (
    (hand === "グー" && cpu === "チョキ") ||
    (hand === "チョキ" && cpu === "パー") ||
    (hand === "パー" && cpu === "グー")
  ) {
    judgement = "勝ち";
    win += 1;
  } else if (
    (hand === "グー" && cpu === "パー") ||
    (hand === "チョキ" && cpu === "グー") ||
    (hand === "パー" && cpu === "チョキ")
  ) {
    judgement = "負け";
  }
  total += 1;

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});

app.get("/greet", (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res.send("名前を入力してください。");
  }

  res.send(`こんにちは、${name}さん！ようこそ！`);
});

app.get("/add", (req, res) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2); 

  if (isNaN(num1) || isNaN(num2)) {
    return res.send("有効な数字を入力してください。");
  }

  const sum = num1 + num2;
  res.send(`計算結果: ${num1} + ${num2} = ${sum}`);
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
