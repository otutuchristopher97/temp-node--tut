const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        return res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        return res.end('Here is our short history')
    }
    else{
        return res.end(`
        <h1>Oops!</h1>
        <p>We Can seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
    }
    
})

server.listen(5000)
