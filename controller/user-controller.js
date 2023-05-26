require('../database/db.js')
const model=require('../model/user.js')
exports.userRead=async (req,resp)=>{
    let result=new model(req.body)
    let data=await result.save()
    console.log(data)
    resp.send(data)
}