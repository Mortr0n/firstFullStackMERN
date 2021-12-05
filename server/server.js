const express = require('express');
const cors = require('cors');
const app = express();
require('./config/mongoose.config'); //starting MongoDB server connection
// app.use cors line adds the header Access-Control-Allow-Origin: * to all requests now
// https://medium.com/zero-equals-false/using-cors-in-express-cac7e29b005b
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// shorthand way below!
require('./routes/person.routes')(app);


const port = 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`) );
