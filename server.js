const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const PORT = 3000;

// 静的レンダリング
// app.use(express.static("public"));

// 動的レンダリング
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // サーバー側のログに表示
    // console.log("Hello express");

    // クライアント側に表示
    // res.send("<h1>こんにちは</h1>");

    // ステータスコードを表示
    // res.sendStatus(404);

    // ステータスのメッセージをデフォルトから変更
    // res.status(404).send("エラーです");

    // jsonでも返せる
    // res.status(500).json({msg: "エラーです"});

    // 本来ならデータ部分はデータベースなどから取得
    res.render("index", {text: "NodejsとExpress"});
});

// ルーティング
app.use("/user", userRouter);

app.listen(PORT, () => console.log("サーバーが起動しました"));