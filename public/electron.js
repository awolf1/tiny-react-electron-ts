const electron  = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

app = electron.app;
BrowserWindow = electron.BrowserWindow;
Tray = electron.Tray;
Menu = electron.Menu;

const _hasTray = true;
const _hideMenu = true;
var iconpath = path.join(__dirname, 'logo512.png')

let mainWindow;
let tray;
let isQuiting;


function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        icon: iconpath,
        frame: false,
        enableRemoteModule: true,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL(
        isDev ?
        "http://localhost:3000" :
        `file://${path.join(__dirname, "../build/index.html")}`
    );

    mainWindow.on("closed", () => {
        mainWindow = null;
    });

    /*mainWindow.webContents.on("devtools-opened", () => {
        if(process.argv[2] != '--dev'){
            mainWindow.webContents.closeDevTools();
        }
    });*/

    if(process.argv[2] == '--dev'){
        mainWindow.webContents.openDevTools();
    }else{
        mainWindow.webContents.on("devtools-opened", () => {
            mainWindow.webContents.closeDevTools();
        });
    }

    if(_hideMenu){
        mainWindow.setMenuBarVisibility(false);
    }
    
    
    if(_hasTray){
        mainWindow.on('close', (event) => {
            if (!isQuiting) {
                event.preventDefault();
                mainWindow.hide();
                event.returnValue = false;
            }
        });
    }

}

function init(){

    if(_hasTray){
        tray = new Tray(iconpath);

        tray.setContextMenu(Menu.buildFromTemplate([
            {
                label: 'Show App', click: () => {
                    mainWindow.show();
                }
            },
            {
                label: 'Quit', click: () => {
                    isQuiting = true;
                    app.quit();
                }
            }
        ]));
    }

    createWindow();
}


app.on("ready", init);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});

app.on('before-quit', () => {
    isQuiting = true;
});

process.on("uncaughtException", (err) => {
    const messageBoxOptions = {
         type: "error",
         title: "Error in Main process",
         message: "Something failed"
     };
     dialog.showMessageBox(messageBoxOptions);
     throw err;
 });