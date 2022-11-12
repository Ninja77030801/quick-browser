const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            javascript: true
        }
    });
    win.loadURL("http://localhost:8080");
    //win.loadFile(`${__dirname}\\bin\\index.html`);
    win.removeMenu();
}

app.on('ready', createWindow);

app.on('quit', () => {
    app.quit();
});
