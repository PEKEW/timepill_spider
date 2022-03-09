 
  // 引入模块
  const { app, BrowserWindow } = require('electron')
  

  // 创建窗口
  function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      }
    })
  
    // 加载模版
    win.loadFile('index.html')

    // 开发者工具
    win.webContents.openDevTools()

  }
  
  // 初始化后调用
  app.whenReady().then(() => {
    createWindow()
  })
  
  // 管理生命周期
  // 如果不是mac(darwin) 则所有窗口被关闭时 应用退出
  // 在mac上 需要cmd Q显示地退出程序
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()

    // 针对mac 如果没有任何窗口时被激活 则创建一个窗口
    // 在whenready回调中注册监听器 监听activate事件 
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
  })

  const ipc = require('electron').ipcMain;

  ipc.on('new_win', (e, arg) => {

    // 创建子页面
    var main_new_win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      }
    })
    main_new_win.on('ready-to-show', function () {
        main_new_win.webContents.send('data',arg.data); // 发送消息
    })

    main_new_win.loadFile('login.html');
    // main_new_win.webContents.openDevTools()
    // main_new_win.on('closed', () => { main_new_win = null })
})
