const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {
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
  let followedUser = await User.findById(req.params._id)
  let mainUser = await User.findById(req.params._id)
  if(mainUser.followers.includes(!followedUser)){
    try{
      mainUser.findByIdAndUpdate({$push:{following:followedUser }})
      followedUser.findByIdAndUpdate({$push:{followers:mainUser }})
    }catch (err){
      res.status(401).json({msg:err.message,reason:`error you already follow ${followedUser}`})
    }
  }else{
    res.status(400).json(err);
  }
}
const unHeartUser = async(req,res)=>{
  let followedUser = await User.findById(req.params._id)
  let mainUser = await User.findById(req.params._id)
  if(mainUser.followers.includes(followedUser)){
    try{
      mainUser.findByIdAndUpdate({$pull:{following:followedUser }})
      followedUser.findByIdAndUpdate({$pull:{followers:mainUser }})
    }catch (err){
      res.status(401).json({msg:err.message,reason:`error you don't follow ${followedUser}`})
    }
  }else{
    res.status(400).json(err);
  }
}
const loginUser = async(req,res)=>{
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
      { expiresIn: '24h' }
    );
  }
  function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
  }


module.exports = {
    createUser,loginUser,checkToken,editUser,deleteUser,heartUser,unHeartUser
}