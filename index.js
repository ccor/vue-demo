const express = require('express');
const bodyParser = require('body-parser');
const api = require('./src/api')

const port = 8080;

app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api', api)

app.listen(port,  () => console.log(`Server running: http://localhost:${port}`));