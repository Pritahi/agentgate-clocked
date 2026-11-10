const http=require('node:http'),fs=require('node:fs'),path=require('node:path');const gate=require('./api/gate');
http.createServer((req,res)=>{
 if(req.url==='/api/gate'){
  let b='';req.on('data',c=>{b+=c;if(Buffer.byteLength(b)>65536)req.destroy();});req.on('end',()=>{req.body=b;res.status=c=>(res.statusCode=c,res);res.json=o=>(res.setHeader('Content-Type','application/json'),res.end(JSON.stringify(o)));gate(req,res);});return;
 }
 const url=new URL(req.url,'http://localhost'),name=url.pathname==='/'?'index.html':url.pathname.slice(1),root=path.join(__dirname,'public'),f=path.resolve(root,name);
 if(!f.startsWith(root+path.sep)){res.writeHead(403);return res.end('Forbidden');}
 fs.readFile(f,(e,d)=>{if(e){res.writeHead(404);return res.end('Not found');}res.setHeader('Content-Type',f.endsWith('.html')?'text/html; charset=utf-8':f.endsWith('.js')?'text/javascript':f.endsWith('.json')?'application/json':'text/plain');res.end(d);});
}).listen(process.env.PORT||3000,()=>console.log('AgentGate local server ready'));
