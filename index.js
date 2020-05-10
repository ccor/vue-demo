const express = require('express');
const bodyParser = require('body-parser');

const port = 8080;

app = express();
app.use(bodyParser.json());
app.use(express.static('public'));


app.listen(port,  () => console.log(`Server running: http://localhost:${port}`));