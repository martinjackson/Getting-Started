
import electron from 'electron';

var app = electron.app;
var BrowserWindow = electron.BrowserWindow;


var client = null;
if (process.env.NODE_ENV === 'hot') {
    console.log('Hot Load detected on port: ', process.env.HOT_PORT);
  client = require('electron-connect').client;    // Live-reloader
}


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win = [null, null];
const pages  = ['index.html', 'example.html'];
const coords = [{width: 700, height: 900},
                {width:520, height:500, center:true, useContentSize: true}];

function createWindow (page, specs) {
  // Create the browser window.
  const win = new BrowserWindow(specs)
  const url = 'file://' + __dirname + '/public/' + page;

  win.loadURL(url);

  // only attach electron-connect when live loading
  if (client !== null) {
      client.create(win, {port:process.env.HOT_PORT});
   }

  return win;
}

const {ipcMain} = require('electron')

function createWindows () {
  for (let i=0; i<pages.length; i++) {
    if (win[i] == null) {
       win[i] = createWindow(pages[i], coords[i]);

         if (process.env.NODE_ENV === 'hot') {
           win[i].webContents.on('did-finish-load', () => {
            win[i].webContents.send('attach-debug', '');
          });
        }

       // Emitted when the window is closed.
       win[i].on('closed', function () { win[i] = null; })
     }
   }
 }

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindows)

// On OS X it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
app.on('activate', createWindows)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
