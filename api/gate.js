const {gateMessage,gateScript,MAX_CHARS,SCOPES}=require('./_gate');
let used=0;const clients=new Map();
module.exports=async(req,res)=>{
 res.setHeader('Cache-Control','no-store');res.setHeader('X-Content-Type-Options','nosniff');
 if(req.method!=='POST')return res.status(405).json({error:'POST only'});
 let body;try{body=typeof req.body==='string'?JSON.parse(req.body):req.body;}catch{return res.status(400).json({error:'Invalid JSON'});}
 if(!body||!['message','script'].includes(body.kind)||typeof body.text!=='string'||!body.text.trim())return res.status(400).json({error:'Send a non-empty text and message or script kind'});
 if(Array.from(body.text).length>MAX_CHARS)return res.status(413).json({error:`Maximum ${MAX_CHARS} characters`});
 if(body.kind==='script'&&body.scope&&!SCOPES[body.scope])return res.status(400).json({error:'Unknown scope'});
 const ip=String(req.headers?.['x-forwarded-for']||req.socket?.remoteAddress||'local').split(',')[0],now=Date.now();
 for(const [k,v]of clients)if(now-v.at>60000)clients.delete(k);
 const c=clients.get(ip)||{at:now,n:0};clients.set(ip,c);
 if(++c.n>12||++used>400){res.setHeader('Retry-After','60');return res.status(429).json({error:'Demo limit reached. Run locally with your own free key.'});}
 try{const t=Date.now();const r=body.kind==='message'?await gateMessage(body.text):await gateScript(body.text,body.scope||'printer');return res.status(200).json({...r,elapsedMs:Date.now()-t});}
 catch{return res.status(503).json({kind:body.kind,decision:'HOLD',releaseEligible:false,forward:null,error:'Detector unavailable or timed out. Nothing is released. Try later or review manually.'});}
};
