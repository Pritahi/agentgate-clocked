const crypto=require('node:crypto');
async function clocked(endpoint,body){
 const key=process.env.CLOCKED_API_KEY;
 if(!key)throw new Error('Clocked is not configured');
 const r=await fetch(`https://clocked.rezolve.ai/clocked/${endpoint}`,{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json','Idempotency-Key':crypto.randomUUID()},body:JSON.stringify(body),signal:AbortSignal.timeout(12000)});
 if(!r.ok){await r.arrayBuffer();throw new Error(`Clocked unavailable (${r.status})`);}
 return r.json();
}
module.exports={clocked};
