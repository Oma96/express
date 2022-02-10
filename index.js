const express = require('express')
const app = express()
const port= 3000
const date = new Date()
const day = date.getDay()
const hour= date.getHours()

app.use(express.static("public"))
const middelware=(req, res, next)=>{
    if (day>=1 && day<=3 && hour >= 08 && hour<=18 ){next()}
    else{
        res.sendFile(__dirname+'/public/error.html')
    }
}

app.get('/', middelware,(req,res)=>{
res.sendFile(__dirname +'/public/home.html')
})
app.get('/about', middelware,(req,res)=>{
    res.sendFile(__dirname +'/public/about.html')
    })
app.get('/contact', middelware,(req,res)=>{
res.sendFile(__dirname +'/public/contact.html')
})




app.listen(port,(err)=>{
    err? console.log(err):
    console.log('the app is running')
})