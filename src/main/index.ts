import { app, BrowserWindow } from "electron";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.webContents.openDevTools();
  win.loadURL("http://localhost:3000");
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
  console.log("9999");
  console.log("8888");
  console.log("7777");
  console.log("6666");
});
