const express = require("express");
const router = express.Router();

// ユーザー情報を切り分け
// server.jsで/user以下をルーティングするので相対パスで記載

router.get("/", (req, res) => {
    res.send("ユーザーです");
})

router.get("/info", (req, res) => {
    res.send("ユーザー情報です");
})

router.get("/:id", (req, res) => {
    // バッククォートに注意
    res.send(`${req.params.id}のユーザ情報を取得しました`)

    // ダブルクォートではすべてを文字列とみなされる
    // res.send("${req.params.id}のユーザ情報を取得しました")
})

// post, deleteも同様に

// router.post("/:id", (req, res) => {
//     res.send(`${req.params.id}のユーザを追加しました`);
// })

// router.delete("/:id", (req, res) => {
//     Todo
// })

module.exports = router;