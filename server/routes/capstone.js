const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>res.send("this has been responded")
)

module.exports=router