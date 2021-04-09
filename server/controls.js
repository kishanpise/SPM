var express = require('express');
var bodyparser = require('body-parser');
var cors = require ('cors');
var db = require('./model');

var api = express();
api.use(bodyparser.json());
api.use(bodyparser.urlencoded({extended:true}));
api.use(cors());

api.get('/Students',(request,response)=>{
    db.fetchStudents(function(err,res){
        if(err){
            res={"Error":"No records Found.."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        }
    })
})

api.get('/Student/:name',(request,response)=>{
    var name = request.params.name;
    db.fetchStudent(name,function(err,res){
        if(err){
            res={"Error":"No records Found.."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        }
    })
})

api.post('/Students',(request,response)=>{
    var data = request.body;
    db.insertStudents(data,function(err,res){
        if(err){
            res={"Error":"No Records Found..."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        }
    })
})

api.post('/Student',(request,response)=>{
    var data = request.body;
    db.insertStudent(data,function(err,res){
        if(err){
            res={"Error":"No Records Found..."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        }
    })
})

api.put('/Student/:name',(request,response)=>{
    var name = request.params.name;
    var salary = request.body;
    db.updateStudent(name,salary,function(err,res){
        if(err){
            res={"Error":"No Records Found..."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        }
    })
})

api.put('/Students/:name',(request,response)=>{
    var name = request.params.name;
    var salary = request.body;
    db.updateStudents(name,salary,function(err,res){
        if(err){
            res={"Error":"No Records Found..."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        }
    })
})

api.delete('/Student/:name',(request,response)=>{
    var name = request.params.name;
    db.deleteStudent(name,function(err,res){
        if(err){
            res={"Error":"No Records Found..."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        } 
    })
})

api.delete('/Students/:name',(request,response)=>{
    var name = request.params.name;
    db.deleteStudents(name,function(err,res){
        if(err){
            res={"Error":"No Records Found..."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        } 
    })
})

api.get('/Projects',(request,response)=>{
    db.fetchProjects(function(err,res){
        if(err){
            res={"Error":"No Records Found..."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        }  
    })
})

api.get('/Project/:title',(request,response)=>{
    var title = request.params.title;
    db.fetchProject(title,function(err,res){
        if(err){
            res={"Error":"No Records Found..."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        }  
    })
})

api.post('/Project',(request,response)=>{
    var data = request.body;
    db.insertProject(data,function(err,res){
        if(err){
            res={"Error":"No Records Found..."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        }
    })
})

api.put('/Project/:title',(request,response)=>{
    var title = request.params.title;
    var desc = request.body;
    db.updateProject(title,desc,function(err,res){
        if(err){
            res={"Error":"No Records Found..."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        }
    })
})

api.delete('/Project/:title',(request,response)=>{
    var title= request.params.title;
    db.deleteProject(title,function(err,res){
        if(err){
            res={"Error":"No Records Found..."}
            response.statusCode = 404;
        }else{
            response.statusCode = 200;
            response.send(JSON.stringify(res));
            response.end();
        }
    })
})

api.listen(3000,console.log("Waiting at 3000...."));