const aPost = require('../../models/Post')

module.exports = {
    create,
    show
  };
  async function show(req, res) {
    try{
      const post = await aPost.findById(req.params.id);
      res.status(200).json(item);
    }catch(e){
      res.status(400).json({ msg: e.message });
    }  
  }
  const create = async (req, res) => {
   try{
        const user = await aPost.create(req.body);
        
        res.status(200).json(item);
      }catch(e){
        res.status(400).json({ msg: e.message });
      } 
 }

   
