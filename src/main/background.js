'use strict'
const path = require('path')
import { app, protocol, BrowserWindow, Tray, ipcMain, screen } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const windowStateKeeper = require('electron-window-state')

const isDevelopment = process.env.NODE_ENV !== 'production'

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true }}
])


let win

async function createWindow() {
  // Create the browser window.
  let size = screen.getPrimaryDisplay().workAreaSize
  let width = parseInt(size.width * 0.9)
  let height = parseInt(size.height * 0.9)
  let mainWindowState = windowStateKeeper({
    defaultWidth: width,
    defaultHeight: height
  })
  win = new BrowserWindow({
    'x': mainWindowState.x,
    'y': mainWindowState.y,
    'width': mainWindowState.width,
    'height': mainWindowState.height,
    frame: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: process.env.NODE_ENV !== 'production',
      webSecurity: false,
      preload: path.resolve(__dirname, 'preload.js')
    },
    show: false
  })

  mainWindowState.manage(win)

  win.on('ready-to-show', function() {
    win.show() // 初始化后再显示
  })
  // 页面加载完
  win.webContents.on('did-finish-load', function() {
    win.webContents.send('loaded', win.getMaximumSize())
  })
  // 最小化
  ipcMain.on('minimize', () => {
    try {
      console.log('minimize')
      win.minimize()
    } catch (err) {
      console.log(err)
    }
  })
  // 最大化
  ipcMain.on('maximize', () => {
    try {
      win.maximize()
    } catch (err) {
      console.log(err)
    }
  })
  // 还原
  ipcMain.on('unmaximize', () => {
    try {
      win.unmaximize()
    } catch (err) {
      console.log(err)
    }
  })
  // 关闭窗口
  ipcMain.on('close', () => {
    try {
      console.log('minimize')
      win.close()
    } catch (err) {
      console.log(err)
    }
  })
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    console.log('加载页面:', process.env.WEBPACK_DEV_SERVER_URL)
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    win.loadURL('app://./index.html')
    const cookieInstance = win.webContents.session.cookies
    cookieInstance.on('changed', (e, cookie, cause, removed) => {
      // let obj = { e, cookie, cause, removed }
      win.loadURL('app://./index.html')
    })
  }
}
// 忽略无效证书
app.commandLine.appendSwitch('ignore-certificate-errors')

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
var tray = null
app.on('ready', async() => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      console.log('开发模式:', VUEJS_DEVTOOLS)
      // await installExtension(VUEJS_DEVTOOLS)
      // await session.loadExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  } else {
    // 设置托盘
    tray = new Tray(path.resolve(__dirname, 'public/icon.png'))
  }
  createWindow()
})

// 监听从渲染进程发来的消息
ipcMain.on('quit', () => {
  app.quit()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
