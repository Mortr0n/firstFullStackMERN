const express = require('express');
const app = express();
const port = 8000;

// shorthand way below!
require('./routes/person.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );
