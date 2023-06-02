const dotenv=require("dotenv").config()
const express =require('express')
const cors=require('cors')
const path=require("path")
require ('./models/connection.js');

const app=express()
const port=process.env.PORT || 4000  
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())
app.use('/',require('./routes/router.js'  ))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'build', 'index.html'));
  });

app.listen(port,()=>{
    console.log(`server is Running at https://localhost:${port}`)
})