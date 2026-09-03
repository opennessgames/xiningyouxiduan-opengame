/*
 * @Author: xixi_
 * @Date: 2024/1/9 19:02:58
 * @LastEditors: xixi_
 * @LastEditTime: 2026-09-03 14:09:32
 * @FilePath: /xiningyouxiduan-opengame/sever.js
 * Copyright (c) 2020-2026 by xixi_ , All Rights Reserved.
 */

const express = require('express');
const app = express();
const port = 11451;

app.use(express.static('public'));

app.use(function (req, res, next) {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log("传送门1(需注册码)：http://localhost:11451/MoreGame/");
  console.log("传送门2：http://localhost:11451/More%20Game2/index5.html")
  console.log("传送门3：http://localhost:11451/More%20Game4/index2.html")
  console.log("传送门4：http://localhost:11451/More%20Game5/index.html")
  console.log("Lua代码运行传送门:http://localhost:11451/More%20Game/luatos-emulator/index.html")
  console.log("在浏览器输入上面网址就阔以开始游戏啦")
});