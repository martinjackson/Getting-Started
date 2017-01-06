const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow = null;

app.on('window-all-closed', () => { app.quit(); });

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.on('closed', () => { mainWindow = null; });

  var url = (process.env.NODE_ENV == 'live') ?
      'http://localhost:3000/index.html' :
      'file://' + __dirname + '/build/index.html';
  mainWindow.loadURL(url);
});
