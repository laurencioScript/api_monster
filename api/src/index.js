const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use (bodyParser.json ({limit: '50mb'}));
app.use (bodyParser.urlencoded ({limit: '50mb', extended: true}));

require('./controller/monsterController')(app);

app.listen(8080);

