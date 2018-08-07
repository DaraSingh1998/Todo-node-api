// aconst expect=require('expect');
// const request=require('supertest');
// const {ObjectID}=require('mongodb');
//
// const{app}=require('./../server');
// const{Todo}=require('./../models/todo');
//
// const todos=[{
// 	_id: new ObjectID(),
// 	text:'First'
// },{
// 	_id: new ObjectID(),
// 	text:'Second'
// },{
// 	_id: new ObjectID(),
// 	text:'Third'
// }];
//
// // For testing GET
// beforeEach((done)=>{
// 	Todo.remove({}).then(()=>{
// 		return Todo.insertMany(todos);
// 	}).then(() =>done())
// });
//
// // For testing 	POST
// // beforeEach((done)=>{
// // 	Todo.remove({}).then(()=>done());
// // });
//
//
// describe('POST/todos',()=>{
// 	it('should create a new function',(done)=>{
// 		var text='Test string';
//
//
// 	request(app)
// 	.post('/todos')
// 	.send({text})
// 	.expect(200)
// 	.expect((res)=>{
// 		expect(res.body.text).toBe(text);
// 	})
// 	.end((e,res)=>{
// 		if(e){
// 			return done(err);
// 		}
//
// 		Todo.find({text}).then((todos)=>{
// 			expect(todos.length).toBe(1);
// 			expect(todos[0].text).toBe(text);
// 			done();
// 		}).catch((e)=>{
// 			done(e);
// 		})
// 	});
// 	});
//
//
// 	it('should not create todo with invalid body',(done)=>{
// 		request(app)
// 		.post('/todos')
// 		.send({})
// 		.expect(400)
// 		.end((e,res)=>{
// 		if(e){
// 			return done(err);
// 		}
//
// 		Todo.find().then((todos)=>{
// 			expect(todos.length).toBe(3);
// 			done();
// 		}).catch((e)=>{
// 			done(e);
// 		})
// 	})
// 	});
//
// });
//
//
// describe('GET/todos',()=>{
// 	it('should get all todos',(done)=>{
// 		request(app)
// 		.get('/todos')
// 		.expect(200)
// 		.expect((res)=>{
// 			expect(res.body.todos.length).toBe(3);
// 		})
// 		.end(done);
// 	});
// });
//
// describe('Get /todos/:id',()=>{
// 	it('should return todos',(done)=>{
// 		request(app)
// 		.get(`/todos/${todos[0]._id.toHexString()}`)
// 		.expect(200)
// 		.expect((res)=>{
// 			expect(res.body.todos.text).toBe(todos[0].text);
// 		})
// 		.end(done);
// 	});
// });
