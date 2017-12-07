const dbConfig=require("./dbconfig.js");
const mongoose=require("mongoose");
mongoose.connect(dbConfig.dbURL,{
    useMongoClient:true
});
console.log("database conntection created");
module.exports=mongoose;