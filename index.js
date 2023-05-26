 
const express=require('express')
const app=express()
const cors = require('cors');
const postuserRouter=require('./router/user-router.js')
const path=require('path')
const dotenv=require('dotenv')
dotenv.config()



app.use(express.json())
app.use(cors());
app.use('',postuserRouter.router)



app.use(express.static(path.join(__dirname,'./client/build')))
app.get('*',(req,resp)=>{
    resp.sendFile(path.join(__dirname,'./client/build/index.html'))
})
 


app.listen(process.env.PORT)