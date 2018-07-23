var mongoose=require('mongoose');

mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost:27017/Todo',{ useNewUrlParser: true });

var Todo=mongoose.model('Todo',{
	text:{
		type:String,
		required:true,
		minlength:1,
		trim:true
	},
	completed:{
		type:Boolean,
		default:false
	},
	completedAt:{
		type:Number,
		default:null
	}
});

var newTodo = new Todo({
	text:"Cook"
});

newTodo.save().then((doc)=>{
	console.log("Saved Todo",doc);
},(err)=>{
	console.log("Unable to save");
});

var newTodo2 = new Todo({
	text:"Sleep",
	completed:true,
	completedAt:22
});

newTodo2.save().then((doc)=>{
	console.log("Saved Todo",doc);
},(err)=>{
	console.log("Unable to save");
});

var newTodo3 = new Todo({
	text:"Wake",
	completed:true,
	completedAt:22
});
newTodo3.save().then((doc)=>{
	console.log("Saved Todo",doc);
},(err)=>{
	console.log("Unable to save");
});
var User=mongoose.model('User',{
	email:{
		required:true,
		trim:true,
		minlength:1,
		type:String
	}
});
var newUser = new User({
	email:"vibhor.bakshi1998@gmail.com"
});


newUser.save().then((doc)=>{
	console.log("Saved User",doc);
},(err)=>{
	console.log("Unable to save");
});