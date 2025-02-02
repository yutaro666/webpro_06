# webpro_06
11月18日
## このプログラムについて
全プログラム共通の手順として，app5.jsの起動があるがこれは，ターミナルからcdコマンドを使いapp5.jsのあるファイルを開く．ファイルを開いたらnode app5.jsのコマンドを使うことでapp5.jsを起動することができる．
## プログラム一覧
ファイル名 | 説明
-|-
app5.js | プログラム本体
public/janken.html | じゃんけんの開始画面
public/greet.html | 入力された名前に挨拶を返す
public/add.html | 入力した数を足し算する

## 使用手順
## じゃんけん
1. app5.js を起動する
1. Webブラウザでlocalhost:8080/public/janken.htmlにアクセスする
1. 自分の手を入力する

このプログラムは，ユーザーからの3つの入力(グー・チョキ・パー)に対して，コンピューターが応答し，勝敗を決めるというプログラムである．じゃんけんが終わると試合数・勝利数が表示され，コンピューターに勝利すると勝利数が増加する．

```mermaid
flowchart TD;

start["開始"];
end1["終了"]
if{"条件に合うか"}
win["勝ち"]
loose["負け"]


start --> if
if -->|yes| win
win --> end1
if -->|no| loose
loose --> end1
```

## 挨拶
1. app5.js を起動する
1. Webブラウザでlocalhost:8080/public/greet.htmlにアクセスする
1. 自分の名前を入力する

このプログラムは，入力した名前に対して挨拶を返すプログラムである．ローマ字や漢字であっても入力するとそのまま表示される．

```mermaid
flowchart TD;

start["開始"];
end1["終了"]
if{"名前を入力"}
win["あいさつを返す"]

start --> if
if -->|返信| win
win --> end1
```

## 足し算
1. app5.js を起動する
1. Webブラウザでlocalhost:8080/public/add.htmlにアクセスする
1. 数を2つ入力する

このプログラムは，入力した2つの数字をそれぞれ足し算するプログラムである．足し算は1つ目の数字＋2つ目の数字の順で行われる．またマイナスを使用することもできるため，-1+-1のような計算でも行うことができる．

```mermaid
flowchart TD;

start["開始"];
end1["終了"]
if{"数字を入力"}
win["計算結果を表示"]

start --> if
if -->|計算を行う| win
win --> end1
```
