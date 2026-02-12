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

module.exports = router;