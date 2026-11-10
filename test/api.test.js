const {test}=require('node:test'),assert=require('node:assert/strict'),gate=require('../api/gate');
async function run(req){let status=200,body;const res={setHeader(){},status(c){status=c;return this;},json(x){body=x;return this;}};await gate(req,res);return {status,body};}
test('malformed JSON returns 400',async()=>assert.equal((await run({method:'POST',body:'{'})).status,400));
test('wrong method returns 405',async()=>assert.equal((await run({method:'GET'})).status,405));
test('empty input returns 400',async()=>assert.equal((await run({method:'POST',body:{kind:'message',text:''}})).status,400));
test('oversized input returns 413',async()=>assert.equal((await run({method:'POST',body:{kind:'message',text:'a'.repeat(6001)}})).status,413));
test('unknown script scope returns 400',async()=>assert.equal((await run({method:'POST',body:{kind:'script',scope:'anything',text:'x'}})).status,400));
test('missing key fails closed with 503 and no raw details',async()=>{delete process.env.CLOCKED_API_KEY;const r=await run({method:'POST',body:{kind:'message',text:'synthetic'}});assert.equal(r.status,503);assert.equal(r.body.forward,null);assert.equal(r.body.releaseEligible,false);assert.equal(r.body.detail,undefined);});
