/*
 * @Author: xixi_
 * @Date: 2026-09-03 13:18:09
 * @LastEditors: xixi_
 * @LastEditTime: 2026-09-03 14:45:28
 * @FilePath: /xiningyouxiduan-opengame/index.js
 * Copyright (c) 2017-2026 by xixi_ , All Rights Reserved.
 */

const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1050,
        height: 600
    })

    win.loadFile('./public/index.html')
}

app.whenReady().then(() => {
    createWindow()
})