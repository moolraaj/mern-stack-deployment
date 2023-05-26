const express=require('express')
const router=express.Router()
const userInfo=require('../controller/user-controller.js')

router.post('/register',userInfo.userRead )
exports.router=router

