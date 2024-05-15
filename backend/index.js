const express= require('express');
const mongoose = require('mongoose');

const question=require('./router/ques');

const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());

const url="mongodb://localhost:27017/Quiz";
mongoose.connect(url)

.then((_)=>
{
    console.log("Successfully connected to the database");
})
.catch((err)=>{
    console.log("Error connecting to the database",err);
})

app.use(question);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
