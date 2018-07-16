// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo',{ useNewUrlParser: true },(err,client)=>{
	if(err){
		return console.log('Unable to connect to the DataBase');
	}
	console.log('Connected to the DataBase');
	// var db=client.db('Todo');
	// db.collection('Todos').insertOne({
	// 	text:'Somethig to do',
	// 	completed:false
	// },(err,result)=>{
	// 	if(err){
	// 		return console.log("Unable to enter in DataBase",err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined, 2));
	// });
	// db.collection('User').insertOne({
	// 	name:'Vibhor Bakshi',
	// 	alias:'Dara Singh',
	// 	location:'Unknown'
	// },(err,result)=>{
	// 		if(err){
	// 		return console.log("Unable to enter in DataBase",err);
	// 	}
	// 	console.log(result.ops[0]._id.getTimestamp());
	// });
	client.close();
});