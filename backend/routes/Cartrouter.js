import express from 'express'
import { addtocard, fatchcartdata, removetocard } from '../controllers/cardcontroller.js'
import authmiddleware from '../middleware/auth.js'

const cartrouter= express.Router()


cartrouter.post('/add' ,authmiddleware , addtocard)
cartrouter.post('/remove' , authmiddleware, removetocard)
cartrouter.get('/data' , authmiddleware, fatchcartdata)


export default cartrouter
