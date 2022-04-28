
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")



const server = express()
const PORT = process.env.PORT || 5000

server.use(express.json())
server.use(bodyParser.json())
server.use(morgan("dev"))

server.get("/", (req, res)=>{
    let counter = 99
    res.status(200).json({message: `${counter} Bottles of beer on the wall`})
    // next()
})

// link that says "take one down, pass it around"
// link to `/98`, where the number represents the number of bottles left
// get "/:number_of_bottles"
// The number of bottles of beer on the wall (i.e. `98 Bottles of beer on the wall.`)
// a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
// - If there are 0 bottles left, do not show a link to "take one down"

// server.get("/:bottleNumber", (req, res)=>{
//     let bottleNumber = req.params.bottleNumber
//     res.status(200).json({message: `${counter} Bottles of beer on the wall`,
//         link: 
//     })
// })

server.get("/multiple/:bottleNumber", (req, res)=>{
    let counter = 99 - 1
    let bottleNumber = req.params.bottleNumber
    
    let numberBottles = bottles(bottleNumber)
    res.status(200).json({message: numberBottles, link: `localhost:5000/${bottleNumber-1}`})
})

function bottles (num) {
    let numberBottles = []
    // let bottles = bottles

    for(let counter = num; counter >= 1; counter--) 
    {
        // if (counter == 1) {
        //     bottles = 'bottle';
        // }

        numberBottles.push(counter + " bottles of beer on the wall. " + counter + " bottles of beer. Take one down. Pass It Around." + (counter-1) + " bottles of beer on the wall" )
    }
    return numberBottles
}

server.get("/single/:singleNumber", (req, res)=>{
    let counter = 99 - 1
    let singleNumber = req.params.singleNumber
    res.status(200).json({message: singleNumber + " bottles of beer on the wall. " + singleNumber + " bottles of beer. Take one down. Pass It Around." + (singleNumber-1) + " bottles of beer on the wall", link: `localhost:5000/${singleNumber-1}`
    })
})


server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
})


