
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
})



server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
})




// let bottles;
// for (counter = 99; counter >= 1; counter = counter - 1) 
// {
//     if (counter == 1) {
//         bottles = 'bottle';
//     } else {
//         bottles = 'bottles';
//     }
//     console.log(counter+" "+bottles+" of beer on the wall.");
//     if (counter < 99) {
//         console.log("");
//         console.log(counter+" "+bottles+" of beer on the wall.");
//     }
//     console.log(counter+" "+bottles+" of beer.");
//     console.log("Take one down.");
//     console.log("Pass it around.");
//     if (counter == 1) {
//         console.log("No bottles of beer on the wall.");
//     }
// }







// beerSongRouter.route("/")
// .get((req, res)=>{
//     res.status(200).json({message: "99 Bottles of beer on the wall"})
// })

// link that says "take one down, pass it around"
// link to `/98`, where the number represents the number of bottles left
// get "/:number_of_bottles"
// The number of bottles of beer on the wall (i.e. `98 Bottles of beer on the wall.`)
// a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
// - If there are 0 bottles left, do not show a link to "take one down"



// .post(middleware.formValidation,(req, res)=>{
//     const body = req.body
//     fakeData.push(body)
//     res.status(201).json({ToDo: fakeData[fakeData.length-1]})
// })

// todoRouter.route("/:id")
// .get(middleware.idCheck,(req, res)=>{
//     const id = req.params.id

//     res.status(200).json({ToDo: fakeData[id]})
// })


// const fakeData = require("../fakeDatabase/fakeData")

// function idCheck(req, res, next){
//     const id = req.params.id
//     if(id >= fakeData.length){
//         res.status(404).json({message: "ID Does Not Exist"})
//     }
//     else {
//         next()
//     }
// }



// module.exports = {idCheck, formValidation}