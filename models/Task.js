var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);
var taskSchema = new Schema({
    name:{type:String, require:true}
});

module.exports = mongoose.model('Task',taskSchema);