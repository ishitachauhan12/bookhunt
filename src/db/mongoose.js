const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin-ishi:Sara%40123@cluster0.r20mo.mongodb.net/task-manager').then(()=>{
    console.log("connection successful")
}).catch((e)=>{
console.log("no connection",e)
})
