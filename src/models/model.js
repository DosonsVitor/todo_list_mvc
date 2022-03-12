var fs = require("fs");

var tarefas = [];
fs.readFile('././data/tarefas.json', 'utf8', function (err, result) {
    tarefas = JSON.parse(result);
});

module.exports = tarefas;