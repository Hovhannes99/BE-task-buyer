const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const catalogRoutes = require('./routes/catalogRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 6000;

app.use(bodyParser.json());



app.use('/catalog', catalogRoutes);
app.use('/user', userRoutes);
async function start(){
    try {
        await mongoose?.connect(process.env.DB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        app.listen(PORT, ()=>{
            console.log("server runs on port" + PORT)
        })
    }catch (e){
        console.log(e, "error")
    }
}

start()
