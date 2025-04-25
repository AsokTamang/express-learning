import express from 'express'
import { filter1 } from '../controllers/filter1.js'
import { filter2 } from '../controllers/filter2.js'
export const apiroute=express.Router()
apiroute.get('/',filter1)
apiroute.get('/:field/:term',filter2)

