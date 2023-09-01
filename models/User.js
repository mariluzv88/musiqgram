const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Add the bcrypt library
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;  // 6 is a reasonable value

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true
    },
    profilePic:{
      type:String,
      default:""
    },
    coverPic:{
      type:String,
      default:""
    },
    coverPic2:{
      type:String,
      default:""
    },
    deatz:{
     type:String,
     maxLength:80
    },
    mood:{
    type:String,
    // enum:[ :face,2,3]
    },
    followers:{
      type:Array,
      default:[]
    },
    following:{
      type:Array,
      default:[]
    },
    isAdmin:{
      type:Boolean,
      default:false
    }
  }, {
    timestamps: true,
     // Even though it's hashed - don't serialize the password
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});
userSchema.pre('save', async function(next) {
    // 'this' is the user doc
    if (!this.isModified('password')) return next();
    // update the password with the computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
  });
  

module.exports = mongoose.model('User', userSchema);