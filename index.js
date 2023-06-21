require('dotenv').config()
const path = require('path')
const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3000

app.use(cors({
    origin: "*",
        credentials: true
}))

// ZingMp3Router
const ZingMp3Router = require("./src/routers")
app.use("/api",  ZingMp3Router)

// Page Error
app.get("*", (req, res) => {
  res.send("Nhập Sai Đường Dẫn! Vui Lòng Nhập Lại >.<")
});

app.listen(port, () => {
  console.log(`Start server listen at http://localhost:${port}`)
});