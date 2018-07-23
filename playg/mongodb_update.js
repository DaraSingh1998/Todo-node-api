// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo',{ useNewUrlParser: true },(err,client)=>{
	if(err){
		return console.log('Unable to connect to the DataBase');
	}
	console.log('Connected to the DataBase');
	var db=client.db('Todo');
	
	// db.collection('Todods').findOneAndUpdate({
	// 	"_id": new ObjectId("5b4de5bb9b07aeb7ad3bac70")
	// },{
	// 	$set:{
	// 		completed:true
	// 	}
	// },{
	// 	returnNewDocument:true
	// },(err,res)=>{
	// 	if(err){
	// 		return console.log("Unable to enter in DataBase",err);
	// 	}
	// 	console.log(res);
	// });
	db.collection('User').findOneAndUpdate({
		"_id": new ObjectId("5b532c840a845c2728d9b51a")
	},{
		$set:{
			location:"Kochi"
		}
	},{
		returnNewDocument:true
	},(err,res)=>{
		if(err){
			return console.log("Unable to enter in DataBase",err);
		}
		console.log(res);
	});
	// client.close();
});