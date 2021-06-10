const express = require('express');
const mongoose = require('mongoose');
const port = 3000;
const app = express();
const routeConfig = require('./app/config/routes');
require('dotenv').config();
app.use(express.json());
routeConfig(app);
app.set('view engine','pug');
function listen() {
    app.listen(port).timeout = 60 * 10 * 1000;
    console.log(`Express app started on port ${port}`);
}

connect();
function connect() {
    mongoose.connection
      .on('error', console.log)
      .on('disconnected', console.log)
      .once('open', listen);
    mongoose.set('useFindAndModify', false);
  
    return mongoose
      .connect(process.env.LOCAL_DB_URI, {
        keepAlive: 1,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then((data) =>
        console.log(`connected to database of user: ${data.connections[0].user}`)
      )
      .catch(console.log);
  }