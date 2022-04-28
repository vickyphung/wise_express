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

//Greeting Express Application
server.get("/greeting/:name", (req, res)=>{
    const name = req.params.name
    res.status(200).json ({
        message: `What's up, ${name}?`
    })
    console.log(name)
})

//Tip Calculator Express Application
server.get("/tip/:total/:tipPercentage", (req, res)=>{
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage / 100
    const tipTotal = total * tipPercentage
    res.status(200).json({message: `Please leave a tip of $${tipTotal}`})
})

//Magic 8 Ball
server.get("/magic/:question", (req, res)=>{
    const question = req.params.question
    const ballResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const randomBallResponse = ballResponse[Math.floor(Math.random()*ballResponse.length)];
    console.log(question, randomBallResponse);
    res.json({message: `The answer to '${question}?' is: ${randomBallResponse}.`
    })
})

//Pass It Around
//This Express Lab is in ../pass-it-around/passitaround.js

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
})