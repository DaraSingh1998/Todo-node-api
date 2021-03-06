const {ObjectID}=require('mongodb');


var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');


var app=express();
const port=process.env.PORT||3000;
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
	var todo=new Todo({
		text:req.body.text
	});
	todo.save().then((doc)=>{
		res.send(doc);
	},(err)=>{
		res.status(400).send(err);
	});
});

app.get('/todos',(req,res)=>{
	Todo.find().then((todos)=>{
		res.send({
			todos
		})
	},(e)=>{
		res.status(400).send(err);
	});
});

app.get('/todos/:id',(req,res)=>{
	var id=req.params.id;
	if(!ObjectID.isValid(id)){
		res.status(404).send();
	}
	else{
		Todo.findById(id).then((todos)=>{
			if(!todos){
				res.status(404).send();
			}
			res.status(200).send(todos);
		}).catch((e)=>{
			res.status(400).send();
		});
	}
});

app.listen(port,()=>{
	console.log(`Started at port ${port}`);
});


// "test": "mocha server/**/*.test.js",
// "test-watch": "nodemon --exec \"npm test\""

module.exports={app};
