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
    try{
        const post = await aPost.create(req.body);
        await post.save()
      
        console.log(post)
        res.status(200).json(post);
    }catch(err){
        res.status(400).json({ msg:err.message,reason:'Invalid Post'  });
    } 
}
const editPost = async(req,res)=>{
   try{
     const editP = await aPost.findById(req.params.id)
     if(editP.userID === req.body.userID){
       await editP.updateOne({$set: req.body})

     }else{
        res.status(400).json({ msg:err.message,reason:'Invalid Post'  });
     }
    }catch (err){
        res.status(400).json({ msg:err.message,reason:'Invalid Post'  });
    }
}
const deletePost = async(req,res)=>{
    try{
        const deleteP = await aPost.findById(req.params.id)
        if(deleteP.userID === req.body.userID){
          await editP.deleteOne()
   
        }else{
           res.status(400).json({ msg:err.message,reason:'Invalid Post'  });
        }
       }catch (err){
           res.status(400).json({ msg:err.message,reason:'Invalid Post'  });
       }
}
async function feed(req, res) {
    try{
        const posts = await aPost.find({})
      res.status(200).json(items);
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
