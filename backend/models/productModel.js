const mongoose = require("mongoose");

const offerProductSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: String, // better than number because "1kg", "500ml"
    required: true
  },
  originalPrice: {
    type: Number,
    required: true
  },
  offerPrice: {
    type: Number,
    required: true
  },
  offerLabel: {
    type: String, 
    // Example: "15% OFF" or "Buy 1 Get 1 Free"
  }
}, { timestamps: true });



const popularProductSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const popularProductModel = mongoose.model("PopularProduct", popularProductSchema);
const offerProductModel = mongoose.model("OfferProduct", offerProductSchema);

module.exports = {
  offerProductModel,
  popularProductModel
};