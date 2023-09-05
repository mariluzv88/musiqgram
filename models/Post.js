const mongoose = require('mongoose');
const {ObjectId}  = mongoose.Schema.Types


const PostSchema = new mongoose.Schema({
  
   title:{type: String, required:true},
   image:  { type: String, required: true },
  //  createdBy:{type:ObjectId, ref:"User"}
},
  {timestamps:true}
   
);



module.exports = mongoose.model('aPost', PostSchema);