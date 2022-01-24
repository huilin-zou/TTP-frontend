const express=require("express")
const app=express()
const cors=require("cors")
const pool=require("./db")
const exphbs=require("express-handlebars")
const bodyParser=require("body-parser")
const path=require("path")

const PORT=5432;
const sequelizedb=require('./config/sequelizedb')

sequelizedb.authenticate().then(()=>{
    console.log("sequelize db has been connected ")
}).catch(err=>console.log(err.message))


app.use(cors())
app.use(express.json())
app.use('/capstone',require('./routes/capstone'))


app.listen(5000,()=>{
    console.log("server has started on port 5432")
})  