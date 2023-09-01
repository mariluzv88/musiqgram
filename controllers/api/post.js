const aPost = require('../../models/Post')

const show = async(req, res) => {
    try{
        const post = await aPost.findById(req.params.id);
        res.status(200).json(item);
    }catch(e){
        res.status(400).json({ msg: e.message });
    }  
}
const createPost = async (req, res) => {
    try{
        const post = await aPost.create(req.body);
        console.log(aPost)
        console.log(post)
        res.status(200).json(post);
    }catch(e){
        res.status(400).json({ msg: e.message });
    } 
}
async function index(req, res) {
    try{
        const pokemons = await aPost.find({})
      res.status(200).json(items);
    }catch(e){
      res.status(400).json({ msg: e.message });
    }
  }

   
module.exports = {
    createPost,
    show,
    index
  };
