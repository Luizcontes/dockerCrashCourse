const express = require('express')
const app = express()


app.get("/", (req, res) => {
    console.log(`Hello ${req.query.name}`);
    res.send("I got it")
})


app.listen(8080, () => {
    console.log("Server listening...")
})