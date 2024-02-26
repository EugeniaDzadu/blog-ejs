const express= require('express')

const app = express()

const port = process.env.Port||5000

app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about', (req, res)=>{
    res.render('about')
})

app.get('/samplepost', (req, res)=>{
    res.render('samplepost')
})

app.get('/contact', (req, res)=>{
    res.render('contact')
})



app.listen(port ,()=>{
    console.log(`server started on http://localhost:${port}`)
})