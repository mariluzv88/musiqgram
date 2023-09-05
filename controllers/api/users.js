const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const create = async (req, res) => {
    console.log(req.body)
  try {
    // Add user to database
    const user = await User.create(req.body);

    // Helper funtion to create JWT
    const token = createJWT(user);

    // Responding with our jwt
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(err);
  }
};
const heartUser = async(req,res)=>{
  const followedUser = await User.findById(req.params.id)
  const mainUser = await User.findById(req.body.userID)
  if(!followedUser.followers.includes(mainUser)){
    try{
      await mainUser.updateOne({$push:{following:req.params.id }})
      await followedUser.updateOne({$push:{followers:req.body.userID}})
    }catch (err){
      res.status(401).json({msg:err.message,reason:`error you already follow ${followedUser.name}`})
    }
  }else{
    res.status(500).json("Invalid");
  }
}
const unHeartUser = async(req,res)=>{
  const followedUser = await User.findById(req.params.id)
  const mainUser = await User.findById(req.body.userID)
  if(followedUser.followers.includes(req.body.userID)){
    try{
     await  mainUser.findByIdAndUpdate({$pull:{following:req.params.id}})
    await followedUser.findByIdAndUpdate({$pull:{followers:req.body.userID}})
    }catch (err){
      res.status(401).json({msg:err.message,reason:`error you don't follow ${followedUser.name}`})
    }
  }else{
    res.status(500).json("Invalid");
  }
}
const login = async(req,res)=>{
  try{
    // find user by email
    const user = await User.findOne({email:req.body.email})
    const isMatch = await bcrypt.compare(req.body.password,user.password)
    if(!isMatch) throw new Error()
    res.status(200).json(createJWT(user))

  }catch (err){
   res.status(400).json({msg:err.message,reason:'Bad Credentials'})
  }
}
const deleteUser = async(req,res)=>{
  if (req.body.userId === req.params._id || req.body.isAdmin){
    try{
      const user = await User.findByIdAndRemove(req.params.id,token)
    } catch(err){
      res.status(400).json({msg:err.message,reason:'Bad Credentials'})
    }
  }else{
    return  res.status(401).json('Unauthorized')
  }
}
const editUser = async(req,res)=>{
 
   if(req.body.userId === req.params._id || req.body.isAdmin){
    try{
    const user = await User.findByIdAndUpdate(req.params.id,{$set: req.body})
  
    res.status(200).json("Your Account has been updated.")
  } catch (err){
    res.status(400).json({msg:err.message,reason:'Bad Credentials'})
  }}else{
    return res.status(400).json('Bad Credentials')
  }
   }
// ------Helper Function
function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '144h' }
    );
  }
  function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
  }


module.exports = {
    create,login,checkToken,
    editUser,deleteUser,heartUser,unHeartUser
}