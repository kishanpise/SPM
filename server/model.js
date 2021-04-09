var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
var dbo,mdb;

MongoClient.connect(url,function(err,db){
    if(err)
        throw err;
    dbo=db.db('ssce');
    mdb=db;
});

function fetchStudents(callback){
    dbo.collection('Student').find({}).toArray(function(err,res){
      
            callback(err,res);
    });
}

function fetchStudent(title,callback){
    dbo.collection('Student').find({name:title}).toArray(function(err,res){
      
        callback(err,res);
    });
}

function insertStudents(data,callback){
    dbo.collection('Student').insertMany(data,function(err,res){
        callback(err,res);
    })
}

function insertStudent(data,callback){
    dbo.collection('Student').insertOne(data,function(err,res){
        callback(err,res);
    })
}

function updateStudent(title,sal,callback){
    dbo.collection('Student').updateOne({name:title},{$set:sal},function(err,res){
        callback(err,res);
    })
}

function updateStudents(title,sal,callback){
    dbo.collection('Student').updateMany({name:title},{$set:sal},function(err,res){
        callback(err,res);
    })
}

function deleteStudent(title,callback){
    dbo.collection('Student').deleteOne({name:title},function(err,res){
        callback(err,res);
    })
}

function deleteStudents(title,callback){
    dbo.collection('Student').deleteMany({name:title},function(err,res){
        callback(err,res);
    })
}

exports.fetchStudents = fetchStudents;
exports.fetchStudent = fetchStudent;
exports.insertStudents = insertStudents;
exports.insertStudent = insertStudent;
exports.updateStudent = updateStudent;
exports.updateStudents = updateStudents;
exports.deleteStudent=deleteStudent;
exports.deleteStudents=deleteStudents;

function fetchProjects(callback){
    dbo.collection('Project').find({}).toArray(function(err,res){
        callback(err,res);
    });
}

function fetchProject(name,callback){
    dbo.collection('Project').find({title:name}).toArray(function(err,res){
        callback(err,res);
    });
}

function insertProject(data,callback){
    dbo.collection('Project').insertOne(data,function(err,res){
        callback(err,res);
    })
}

function updateProject(name,info,callback){
    dbo.collection('Project').updateOne({title:name},{$set:info},function(err,res){
        callback(err,res)
    })
}

function deleteProject(name,callback){
    dbo.collection('Project').deleteOne({title:name},function(err,res){
        callback(err,res)
})
}

exports.fetchProjects = fetchProjects;
exports.fetchProject=fetchProject;
exports.insertProject=insertProject;
exports.updateProject=updateProject;
exports.deleteProject=deleteProject;