const todo=require('./todo')
const fs=require('fs')
const r=require('read-file')
try{
    fs.appendFileSync("msg.txt","bonjour")
    //console.log("bonjour");
    //r("msg.txt","utf8",function(err,buff){console.log(buff)})//ybda en paralle  bil akhaf 
   console.log(r.sync("msg.txt","utf8")) //synchrone ybda mil aewl 
    todo()
}catch(error){
    console.log("errotr fs"+error);
}