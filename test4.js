const express=require('express');
const app=express();
app.use(express.json());
const port=3001;

app.post('/list',(req,res)=>{
	console.log(req.body);
	res.status(200).json(req.body);
	
});
app.listen(port,()=>{
	console.log(`server is running on ${port}`);
});
