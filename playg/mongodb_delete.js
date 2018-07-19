// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo',{ useNewUrlParser: true },(err,client)=>{
	if(err){
		return console.log('Unable to connect to the DataBase');
	}
	console.log('Connected to the DataBase');
	var db=client.db('Todo');
	
	// deleteMany
	// db.collection('Todos').deleteMany({text:"Eat"}).then((res)=>{
	// 	console.log(res);
	// },(err)=>{
	// 	console.log("Error",err);
	// });


	// deleteOne
	// db.collection('Todos').deleteOne({text:"Repeat"}).then((res)=>{
	// 	console.log(res);
	// },(err)=>{
	// 	console.log("Error",err);
	// });



	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed:true}).then((res)=>{
	// 	console.log(res);
	// });
	// challenge
	// db.collection('User').deleteMany({name:"Vibhor Bakshi"}).then((res)=>{
	// 	console.log(res);
	// });
	db.collection('Users').findOneAndDelete({
    _id: new ObjectId("5b4b2747634563168812a28d")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

	// client.close();
});