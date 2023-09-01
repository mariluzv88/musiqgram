const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
   image:  { type: String, required: true },
  song:  { type: String }
   
});



module.exports = mongoose.model('aPost', PostSchema);