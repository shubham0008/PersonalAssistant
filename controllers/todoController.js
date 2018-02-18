var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://testapp:test@ds235778.mlab.com:35778/todoapp')


var todoSchema = new mongoose.Schema({
item : String
});

var userLogin = new mongoose.Schema({
	id : String,
	key: String
});

var user = mongoose.model('user',userLogin);
var Todo = mongoose.model('Todo',todoSchema);
// var itemOne = Todo({item: 'buy flowers'}).save(function(err){
// 	if(err) throw err;
// 	console.log('item saved');
// });

var data =[{item: 'get milk'},{item: 'walk dog'},{item: 'kick'}];

var urlencodedParser = bodyParser.urlencoded({extended : false});
 
module.exports= function (app) {
	// body...
	app.get('/login',function(req,res)
	{
		res.render('login');
	});
	
	app.post('/logina', urlencodedParser,function(req,res){ 

    var userOne = user(req.body).save(function(err){
     res.send('hello');
	if(err) throw err;
	console.log('item saved');
		
});

});






app.get('/todo',function(req,res){
		
Todo.find({}, function(err,data){
if(err) throw err;
res.render('todo',{todos:data});

});
		


	});


	app.post('/todo', urlencodedParser,function(req,res){
   var itemOne = Todo(req.body).save(function(err){
	if(err) throw err;
	res.json(data);
	console.log('item saved');
});


   // data.push(req.body);
    
	});

	app.delete('/todo/:item',function(req,res){


		Todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err,data){
if(err) throw err;
res.json(data);
		});
		// data = data.filter(function(todo){
		// 	return todo.item.replace(/ /g, '-')!== req.params.item;
		// });

		
		

	});




};