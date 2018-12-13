const { app, BrowserWindow, ipcMain } = require('electron');
const { exec } = require('child_process');
const fs = require('fs');

let win;
function createWindow() {
  win = new BrowserWindow({ width: 1024, height: 768 });
  win.loadURL(`file://${__dirname}/index.html`);
}
app.on('ready', createWindow);

ipcMain.on('form-submission', function (event, data) {
  const file_path = `${__dirname}/tmp/test.exs`
  const contents = 'input="""\n' + data.input + '\n"""\n' + data.code;
  fs.writeFile(file_path, contents, function (err) {
    if (err) {
      return console.log(err);
    }

    exec('elixir ' + file_path, (err, stdout, stderr) => {
      console.log(`--\n err: ${err} \n stdout: ${stdout} \n stderr: ${stderr}`);
      win.webContents.send("result", { err: err, stdout: stdout, stderr: stderr })
    })
  });
});