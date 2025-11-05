const express=require('express');
const app=express();
const port=3000;
app.use(express.json());

app.get('/data',(req,res)=>{
    res.send('Hello World!');
});

app.post('/data',(req,res)=>{
    const data=req.body;
    res.json({"user created":data});
});
app.put('/data/:id',(req,res)=>{
    const id=req.params.id;
    const data = req.body;
    res.json({"user updated":{id,data}});
});
app.delete('/data/:id',(req,res)=>{
    const id=req.params.id;
    res.json({"user deleted":id});
});
app.patch('/data/:id',(req,res)=>{
    const id=req.params.id;
    const data =req.body;
    res.json({"user patched":{id,data}});


});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});