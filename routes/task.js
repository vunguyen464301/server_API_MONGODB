var express = require('express');
var router = express.Router();
var Task = require('../models/Task');
router.get('/task',(req,res,next)=>{
    Task.find({}).exec((err,tasks)=>{
        if(err)res.status(400).send('err');
        else{
            res.status(200).json(tasks);
        }
    });
});
router.post('/task',(req,res,next)=>{
    var newTask = new Task();
    newTask.name = req.body.name;
    newTask.save((err,task)=>{
        if(err) res.status(400).json(err);
        else{
            res.status(200).json(task);
        }
    });
});
router.delete('/task_remove/:_id',(req,res,next)=>{
    Task.findByIdAndRemove(
        {
            _id:req.params._id
        }
    ).exec((err,task)=>{
        if(err) res.status(400).json(err);
        else{
            res.status(200).json(task);
        }
    })
});
router.put('/task_update/:_id',(req,res,next)=>{
    // console.log("kq "+req.body._id)
    Task.findOneAndUpdate(
        {
            _id:req.params._id
        },{
            $set:{
                name:req.body.name
            }
        },
        { upsert: true }, (err, task) => {
            if (err) next(err);
            else {
                console.log('updated');
                res.json({ status: 'updated' });
            }
        });
});
module.exports=router;