const mongoose=require('mongoose');
const express =require("express");
const cors = require('cors');
const useroutes = require('./Routing/userroute')


const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/library-Information",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("Database Connected Successfully..."))
.catch((error)=>consol.log("Database Not Connected...",error))

app.use(useroutes)

const port = process.env.Port || 4000


app.listen(port,()=>{
    console.log("running server",port);
    
})