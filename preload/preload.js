const { ipcRenderer, clipboard, nativeImage, shell, desktopCapture, contextBridge } = require('electron')
// 向页面提供系统能力
// 对窗口的操作
// 窗口状态
var isMaxSize = false
ipcRenderer.on('loaded', (evt, msg) => {
  console.log('loaded:', msg)
})
// 最小化
const minimize = () => {
  ipcRenderer.send('minimize')
}
// 最大化
const maximize = () => {
  isMaxSize = true
  ipcRenderer.send('maximize')
}
// 还原
const unmaximize = () => {
  isMaxSize = false
  ipcRenderer.send('unmaximize')
}
// 关闭窗口
const close = () => {
  ipcRenderer.send('close')
}
// 注入的对象
const electronObj = {
  close,
  minimize,
  maximize,
  unmaximize,
  isMaxSize
}
// 向渲染进程注入可访问的模块，不支持的能力，通过ipcRenderer的方式向主进程发送消息
contextBridge.exposeInMainWorld(
  "electron", electronObj
)
// 页面加载完毕，注入样式，自定义窗口标题栏
window.onload = function() {
  // 为打开的页面注入样式
  const css = `.catpoint-electron-navbar {
    position: fixed;
    top: 6px;
    left: 6px;
    right: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    padding: 0 12px;
    color: #fff;
    background: #11182c;
    border-radius: 4px 4px 0 0;
    -webkit-app-region: drag;
    cursor: move;
    z-index: 40000;
    box-sizing: border-box;
  }
  #app {
    position: relative;
    z-index: 1;
    padding-top: 30px;
    border: 6px solid #141c34;
    border-radius: 4px;
    overflow: hidden;
    background: #141c34;
  }
  #app .sidebar-container {
    top: 6px;
    right: 6px;
    bottom: 6px;
    left: 6px;
    height: auto;
    border-radius: 4px 0 0 4px;
  }
  .catpoint-electron-navbar .button {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    text-align: center;
    line-height: 18px;
    cursor: pointer;
    font-size: 12px;
    -webkit-app-region: no-drag;
  }
  .catpoint-electron-navbar-close {
    background: #ed6b60;
    border: 1px solid #d25448;
    color: #460804;
  }
  .catpoint-electron-navbar-minimize {
    background: #f6c452;
    border: 1px solid #d7a445;
    color: #905a1d;
  }
  .catpoint-electron-navbar-maximize {
    background: #65cb57;
    border: 1px solid #56a944;
    color: #2a6218;
  }
  #app .sidebar-container {
    padding-top: 30px;
  }
  `
  var titlebarClick = (key) => {
    if (typeof electronObj[key] === 'function') {
      if (isMaxSize === true) {
        if (key === 'maximize') {
          electronObj['unmaximize']()
        } else {
          electronObj[key]()
        }
      } else {
        electronObj[key]()
      }
    }
  }

  const head = document.head || document.getElementsByTagName('head')[0]
  let style = document.createElement('style')
  head.appendChild(style)
  // style.type = 'text/css'
  style.appendChild(document.createTextNode(css))
  let navbar = document.createElement('div')
  navbar.className = 'catpoint-electron-navbar'
  navbar.innerHTML = `<div class="catpoint-electron-navbar-title">Proton Admin</div>
    <div class="catpoint-electron-navbar-btn-wrap">
      <i class="button el-icon-minus catpoint-electron-navbar-minimize" data-key="minimize"></i>
      <i class="button el-icon-plus catpoint-electron-navbar-maximize" data-key="maximize"></i>
      <i class="button el-icon-close catpoint-electron-navbar-close" data-key="close"></i>
    </div>`
  let Body = document.querySelector('body')
  Body.classList.add('electron')
  Body.prepend(navbar)

  const btnWrap = document.querySelector(".catpoint-electron-navbar-btn-wrap")
  btnWrap.addEventListener("click", function(e) {
    const tgt = e.target
    const key = tgt.dataset.key
    if (key) {
      titlebarClick(key)
    }
  })
  
  if (document.getElementById('headerBox')) {
    document.getElementById('headerBox').parentElement.removeChild(document.getElementById('headerBox'))
  }
}
