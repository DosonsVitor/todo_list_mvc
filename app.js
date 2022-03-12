const express = require('express');
const routes = require('./src/routes/route');
const path = require('path');

const app = express();
const port = 8080;

app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'view')));
app.set('view', path.join(__dirname, '/view'));
app.use(express.json())
app.use(routes);

app.listen(port, () => {
    console.log(`Server rodando: http://localhost:${port}`);
});