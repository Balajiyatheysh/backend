const mongoose = require('mongoose');
const  ShortUniqueId  = require('short-unique-id');


const uid = new ShortUniqueId();

const shortUrlSchema = new mongoose.Schema({
  full:{
    type: String,
    required: true,
  },
  short:{
    type: String,
    required: true,
    default: uid.rnd(),
  },
  clicks:{
    type:Number,
    required: true,
    default: 0,
  }
})


module.exports = mongoose.model('ShortUrl', shortUrlSchema);


























// // Generate a short, unique ID
// const shortId = uid();
// console.log(shortId);
