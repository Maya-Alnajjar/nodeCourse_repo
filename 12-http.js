const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req);
    if (req.url==="/"){
        
        res.write("hello this is the homepage");
        res.end();   
    }
   else if (req.url==="/about"){
        res.write("hello this is the about page");
        res.end();   
    }
   else{ res.end(`<h1>Oops</h1>
    <p>we can't seem to find the page that you are looking for</p>
    <a href="/">back home</a>`);}
})
server.listen(5000);