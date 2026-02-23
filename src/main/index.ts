import { app, BrowserWindow } from "electron";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.webContents.openDevTools();
  win.loadURL("http://localhost:3000");
  console.log("1111");
  console.log("2222");
  console.log("3333");
  console.log("4444");
  console.log("5555");
  console.log("6666");
  console.log("7777");
  console.log("8888");
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
