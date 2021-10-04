const express = require('express')
const cors = require('cors')
const path = require('path')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

var app = express()
var port =  3000 || process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

app.use(cors());

app.get('/',(req,res)=>{
   
res.sendFile(publicDirectoryPath+'/html/home.html');
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


