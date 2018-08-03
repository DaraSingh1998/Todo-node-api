const {ObjectID}=require('mongodb');


const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');

var id='5b5c003417f2012f8c03652f1';
var uid='5b55d85211c10224b8b82011';


// if(!ObjectID.isValid(id)){
//   console.log('Id not valid');
// }
// //
// // Todo.find({
// //   _id: id
// // }).then((todos)=>{
// //   console.log("Todo",todos);
// // });
//
// else{
// Todo.findById(id).then((todos)=>{
//   if(!todos){
//     return console.log('ID not found');
//   }
//   console.log("Todo By Id",todos);
// }).catch((e)=>console.log(e));
// }
if(!ObjectID.isValid(uid)){
  console.log('Id not valid');
}
else{
  User.findById(uid).then((users)=>{
    if(!users){
    return console.log("Id not found");
    }
    console.log("User's Email adderess is",users.email);
  }).catch((e)=>console.log(e));
}
