const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors())
app.use (bodyParser.json ({limit: '50mb'}));
app.use (bodyParser.urlencoded ({limit: '50mb', extended: true}));

require('./controller/monsterController')(app);
require('./controller/observadorController')(app);

let swaggerUi = require('swagger-ui-express'), swaggerDocument = require('./swagger.json');

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT || 8080);

