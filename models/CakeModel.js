const mongoose = require('mongoose');

const CakeSchema = mongoose.Schema({
  name: { type: String, required: true , minLength: 4, maxLength:200},
  baker: { type: String, required: true , minLength: 8, maxLength:300},
  ingredients:{
    type: [String],
    minItems: 1,
    require: true,
    enum:['chocolate','flour','gluten free flour','eggs','milk','strawberry', 'vanilla', 'sugar'],
    // required:['chocolate','flour','gluten free flour','eggs','milk','strawberry', 'vanilla', 'sugar'],
  },
  stock: {
    type: Number,
    required: true,
    min:0
  },
  expirationDate: {
    type: Date,
    default: new Date(),
  },
  isGlutenFree: {
    type: Boolean,
    default:false,
  }
});

module.exports = mongoose.model('Cake', CakeSchema);