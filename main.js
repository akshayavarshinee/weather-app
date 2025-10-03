import { app, BrowserWindow, Menu } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isMac = process.platform === 'darwin';
const isDev = process.env.NODE_ENV !== 'development';

if (isMac) {
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    { label: app.name, submenu: [{ role: 'quit' }] }
  ]));
} else {
  Menu.setApplicationMenu(null);
}

function createMainWindow(){
  const mainWindow = new BrowserWindow({
    title: 'Weather App',
    width:  300,
    height: 350,
    resizable: false,
    icon: path.join(__dirname, '/icon.ico')
  });

  mainWindow.loadURL('http://localhost:3000/');
}

app.whenReady().then(async () => {
  await import('./server.js');
  createMainWindow();
});

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
});