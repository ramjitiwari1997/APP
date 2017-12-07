const db=require("./adminSchema/adminSchma.js");
var operations={
    doLogin:function(req,res,obj){
db.find(obj,function(error,docs){
if(error){
    res.send({data:"error"});
}
else{
    if(docs.length==0){
        res.send({data:"wrong"});
    }
    else{
         
        req.session.adminid=obj.id;
        res.send({data:"success"});
        console.log(docs[0]);
    }
}
});
    },
}
module.exports=operations;