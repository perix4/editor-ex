const ipcRenderer = require('electron').ipcRenderer;

const input = () => document.getElementsByName("input")[0];
const code = () => document.getElementsByName("code")[0];
const output = () => document.getElementsByName("output")[0];

const editor = ace.edit(code(), {
  mode: "ace/mode/elixir",
  selectionStyle: "text",
  theme: "ace/theme/tomorrow_night"
});

document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.ctrlKey && evt.keyCode == 13) {
    ipcRenderer.send('form-submission', { input: input().innerText, code: editor.getValue() });
  }
};

ipcRenderer.on('result', function (event, result) {
  if (result.err) {
    output().innerHTML = result.stderr;
    output().classList.add("error");
  } else {
    output().innerHTML = result.stdout;
    output().classList.remove("error");
  }
});