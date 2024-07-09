 import express from 'express'
 import cors from 'cors'
import dbconnect from './config/db.js'
import dotenv from 'dotenv'
import foodrouter from './routes/foodrouter.js'
import userRouter from './routes/Userriuter.js'
import cartrouter from './routes/Cartrouter.js'
import orderroute from './routes/orderroute.js'
dotenv.config()
 
//app config
 const app = express()
const port = process.env.PORT ||  3000

// middleware

app.use(express.json())
app.use(cors())

// db connect
dbconnect()


 //  apiendpoints

 app.use("/api/food", foodrouter)
 app.use('/api/user', userRouter)
 app.use('/api/cart', cartrouter)
 app.use('/api/order', orderroute)
 app.use("/images", express.static("uploads"))




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//mongodb+srv://ashishjat126:ashish@123@cluster0.mw2kw28.mongodb.net/?