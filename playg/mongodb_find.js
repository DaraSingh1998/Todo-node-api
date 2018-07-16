// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo',{ useNewUrlParser: true },(err,client)=>{
	if(err){
		return console.log('Unable to connect to the DataBase');
	}
	console.log('Connected to the DataBase');
	var db=client.db('Todo');
	// Find and print the documents

	// db.collection('Todos').find({
	// 	_id:new ObjectID('5b4ad11cd52053117c54f237')
	// }).toArray().then((docs)=>{
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err)=>{
	// 	console.log('Unable to fetch todos',err);
	// });



	// Count the number of documents

	// db.collection('Todos').find().count().then((count)=>{
	// console.log(`Todos count: ${count}`);
	// console.log(JSON.stringify(docs,undefined,2));
	// },(err)=>{
	// 	console.log('Unable to fetch todos',err);
	// });
	db.collection('User').find({
		name:'Vibhor Bakshi'
	}).count().then((count)=>{
		console.log(`Number of users: ${count}`);
	},(err)=>{
		console.log('Unable to fetch User Count',err);
	});



	// client.close();
});