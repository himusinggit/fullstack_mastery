require('dotenv').config()
const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about',(req,res)=>{
    res.send('<h1>This is about page</h1>')
})
app.get('/mydata',(req,res)=>{
    fetch('https://api.github.com/users/himusinggit').then((data)=>{
        return data.json();
    }).then((completedata)=>{
        res.json(completedata);
    })
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
