const express=require('express');
const app=express();
const authRouter=require('./router/authRouter');

app.use('/api/auth', authRouter);

app.use('/',(req,res)=>{
    res.status('200').json({Data:'JWTauth server'});
});

module.exports=app;