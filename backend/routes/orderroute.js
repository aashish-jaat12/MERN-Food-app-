import express from 'express'
import { list, placeorder, updatestatus, userorder, verifyorder } from '../controllers/ordercontroller.js'

import authmiddleware from '../middleware/auth.js'

const  orderroute = express.Router()


orderroute.post('/placeOrder' ,authmiddleware , placeorder)
orderroute.post('/verify' , verifyorder)
orderroute.get('/userorder' ,authmiddleware, userorder)
orderroute.get('/list' , list)
orderroute.post('/status' , updatestatus)

export default   orderroute