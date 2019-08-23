var Task = require('../models/Task');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo1');

var data = [
    new Task({
      name:"breakfast"
    }),
    new Task({
       name:"lunch"
    }),
    new Task({
        name:"dinner"
    })
]
var done=0;
for(let i = 0 ;i<data.length;i++){
    data[i].save((err,result)=>{
        done++;
        if(done===data.length){
            exit();
        }
    });
}

const exit=()=>{
    mongoose.disconnect();
}