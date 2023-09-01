const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
   image:  { type: String, required: true },
   audio:  { type: String, required: true }
   
});

const aPost = mongoose.model('aPost', PostSchema);

module.exports = aPost;