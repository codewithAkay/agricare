const express=require('express')
const controller = require('../controller/controller')
const router=express.Router()

// Authentication
router.post("/register",controller.register)
router.post("/login",controller.login)
// Products
router.post("/addProduct",controller.addProduct)
router.get("/fetchData",controller.fetchData)

  
  


module.exports=router