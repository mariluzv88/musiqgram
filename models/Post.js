const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
  
  userID:{ type: String, required: true },
   image:  { type: String, required: true },
  song:  { type: String, required: true},
},
  {timestamps:true}
   
);



module.exports = mongoose.model('aPost', PostSchema);