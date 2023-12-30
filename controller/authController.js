const signup=(req,res,next)=>{
const {name,email,password,confirmPassword}=req.body;
console.log (name,email,password,confirmPassword);
return res.stetus(200).json({
    succuess:true,
    data:{}
})
}

module.exports={signup}