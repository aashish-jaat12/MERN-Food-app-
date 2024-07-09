import {login ,Registration}   from '../controllers/usercontroller.js'
import express from 'express'

const userRouter = express.Router()


userRouter.post('/login' , login)
userRouter.post('/Registration' , Registration)

export default  userRouter