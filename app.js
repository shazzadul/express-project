
// Connection server port (Route)

const express = require("express");

const app = express()


// Get Data (Route handler)

app.get('/post', (req,res)=>{
    res.send('<h1> I am post page </h1>')
})

app.get('/about', (req,res)=>{
    res.send('<h1> I am About page </h1>')
})

app.get('/help', (req,res)=>{
    res.send('<h1> I am help page </h1>')
})

app.get('/', (req,res)=>{
    res.send('<h1>I am listening</h1>')
})

// 404 Handler
app.get('*', (req, res)=>{
    res.send('<h1>404 Not Found</h1>')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})




