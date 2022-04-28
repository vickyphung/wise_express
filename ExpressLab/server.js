const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")



const server = express()
const PORT = process.env.PORT || 3000

server.use(express.json())
server.use(bodyParser.json())
server.use(morgan("dev"))


server.get("/", (req, res)=>{
    res.status(200).json({message: "API UP!"})
})


//GREETING
server.get("/greeting/:name", (req, res)=>{
    const name = req.params.name
    res.status(200).json ({
        message: `What's up, ${name}?`
    })
    console.log(name)
})


















server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
})