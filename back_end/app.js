const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors())
app.get("/", (req, res) => {
    console.log(`Hello ${req.query.name} ${req.query.sobrenome ? req.query.sobrenome : ""}`);
    res.send({
        name: req.query.name,
        sobrenome: req.query.sobrenome,
        age: 34
    })
})


app.listen(8080, () => {
    console.log("Server listening at port 8080")
})