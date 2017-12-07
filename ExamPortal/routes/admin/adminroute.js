var express=require('express');
const router=express.Router();
router.post("/doLogin",function(req,res){
let crud=require("./../../crud/adminCRUD.js");
let maker=require("./../../crud/adminSchema/objectMaker.js");
let form=req.body.form;
let id=form.id;
let password=form.password;
let obj=new maker.loginObj(id,password);
//console.log(obj.id+" "+obj.password);
crud.doLogin(req,res,obj);
});
router.get('/dashboard',function(req,res){
    if(req.session.adminid){
   res.render('adminWelcome',{adminid:req.session.adminid});
    }
    else{
        res.redirect('/#/adminLogin');
    }
});
module.exports=router;