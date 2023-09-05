const aPost = require('../../models/Post')


const showPost = async(req, res) => {
    try{
        const post = await aPost.findById(req.params.id);
        res.status(200).json(post);
    }catch(e){
        res.status(400).json({ msg: e.message });
    }  
}
const createPost = async (req, res) => {
  const {title,image} = req.body
    try{
      
        const post = await aPost.create({
          title,image
          
        });
        await post.save().then(result=>{
          res.status(200).json(post)
        })
      
        // console.log(post)
        // res.status(200).json(post);
    }catch(err){
        res.status(400).json({ msg:err.message,reason:'Invalid Post'  });
    } 
}
const editPost = async(req,res)=>{
   try{
      const {id}= req.params.id
        const editP = await aPost.findOneAndUpdate({id: id}.id,{...req.body})
        res.status(200).json(editP)
       }catch (err){
           res.status(400).json({ msg:err.message,reason:'Invalid Post'  });
       }
}
const deletePost = async(req,res)=>{
    try{
      // const {id}= req.params
      // console.log("remove ",id )
      console.log(req.params)
        const deleteP = await aPost.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteP)
       }catch (err){
           res.status(400).json({ msg:err.message,reason:'Invalid Post'  });
       }
}
async function feed(req, res) {
    try{
        const posts = await aPost.find({})
      res.status(200).json(posts)
    }catch(e){
      res.status(400).json({ msg: e.message });
    }
  }

   
module.exports = {
    createPost,
    showPost,
    feed,
    editPost,
    deletePost
  };
