console.log('From index.js')

const { app, BrowserWindow, remote } = require('electron');

// let electron = require('electron')

function openE() {
  let win = new BrowserWindow();
  // let win = new electron.BrowserWindow()
  win.loadFile('index.html')
  // win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  })
  // new BrowserWindow({
  //   width: 400,
  //   height: 400
  // });

}
app.on('ready', openE) //electron.app.on('ready', openE)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win == null) {
    openE()
  }
})