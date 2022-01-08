const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// const multer = require('multer')
// const upload = multer({
//     dest : 'images',
//     limits : {
//         fileSize : 1000000
//     },
//     fileFilter(req,file,cb) {
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a Document'))
//         }
//         cb(undefined,true)
//     }
// })

// app.post('/upload',upload.single('upload'), (req,res) => {
//     res.send()
// },(error,req,res,next) => {
//     res.status(400).send({error : error.message})
// })


// app.use((req,res,next) => {
//     if(req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
//     // console.log(req.method,req.path)
//     // next()
// })

// app.use((req,res,next) => {
//     res.status(503).send('Site is currently down. Check back Soon.!')

// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
    console.log('Server is up on port ' + port)
})

const jwt = require("jsonwebtoken")

// const pet = {
//     firstname : "Hello",
//     lastname : "World"
// }

// pet.toJSON = function() {
//     const obj = this
//     delete obj.firstname
//     return obj
// }

// console.log(JSON.stringify(pet))
// const myFunction = async () => {
//     const token = jwt.sign({ _id : 'abc123' },'thisismynewcourse', { expiresIn:'7 days'})
//     const data = jwt.verify(token,'thisismynewcourse')
//     console.log(data)
// }

// myFunction()

// const Task = require('./models/task')

    // const main = async () => {
    //     // const task = await Task.findById('61d7f7be81959b63b4ecef95')
    //     // await task.populate('owner').execPopulate()
    //     // console.log(task.owner)

    //     const user = await User.findById('61d7f61e7246126258198f1d')
    //     await user.populate('tasks').execPopulate()
    //     // console.log(user.tasks)
    // }

    // main()