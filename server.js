const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require('./routes/items.routes');
const app = express();     //create express application

//bodyParser middleware
app.use(bodyParser.json());

//db config
const db = require('./config/db.config');
mongoose.Promise = global.Promise;
//connect to mongo
mongoose.connect(db.uri,{useUnifiedTopology: true,useNewUrlParser: true,})
    .then(()=>console.log("Mongodb connected"))
    .catch(err=>console.log(err));

//use routes
app.use('/items',items);

const port = process.env.PORT || 8000;
app.listen(port,()=>console.log(`server listen to port ${port}`));