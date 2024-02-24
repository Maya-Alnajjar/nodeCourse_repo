const {readFile,writeFile}=require('fs');

readFile('./content/first.txt','utf8',(err1,result1)=>{

if(err1){
    console.log("oops");
    console.log(err1);
return;
}
console.log(result1);
})


