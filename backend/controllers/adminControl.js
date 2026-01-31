const jwt = require("jsonwebtoken");    
const bcrpyt = require("bcryptjs");
const userModel = require("../models/userModel");
const {popularProductModel, offerProductModel} = require("../models/productModel")
// controller for login post request of admin by login page and when match sent user and jwt token to frontend 


async function login(req , res) {
    console.log(req.body)
    const {username , password} = req.body;
    if(!username || !password) {
        return res.status(400).json({message: "Username and password are required"});
    }
    try {
        const user = await userModel.findOne({username});
        if (!user) {
            return res.status(404).json({message: "User not found"});
        }
        const isMatch = await bcrpyt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({message: "Invalid credentials"});
        }
        const token = jwt.sign({id: user._id, username: user.username}, process.env.JWT_SECRET, {expiresIn: "1h"});
        res.cookie("token", token, {httpOnly: true});
        res.json({message: "Login successful", user, token});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// controller for admin to get all the product list in popular products and send to frontend
async function getAllPopularProducts(req, res) {
    try {
        const popularProducts = await popularProductModel.find();
        res.json({ popularProducts});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// controller for admin to get all the product list in offer products and send to frontend
async function getAllOfferProducts(req, res) {
    try {
        const offerProducts = await offerProductModel.find();
        res.json({ offerProducts });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// controller for admin to add new popular product to the popular products list

async function addProductInPopularProduct(req, res) {
    const {image , title, price} = req.body;
    if(!image || !title || !price) {
        res.json({message:"require all details properly..."})
    }
    try {
        const newProduct = new popularProductModel({image, title, price});
        await newProduct.save();
        res.json({message: "New popular product added successfully", newProduct});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// controller for admin to add new offer product to the offer products list
async function addProductInOfferProduct(req, res) {
    const {image , title, quantity, originalPrice, offerPrice, offerLabel} = req.body;
    if(!image || !title || !quantity || !originalPrice || !offerPrice || !offerLabel) {
        res.json({message:"require all details properly..."})
    }
    try {
        const newProduct = new offerProductModel({image, title, quantity, originalPrice, offerPrice, offerLabel});
        await newProduct.save();
        res.json({message: "New offer product added successfully", newProduct});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// controller for admin to delete a product from popular products list
async function deletePopularProduct(req, res) {
    const {id} = req.params;
    try {
        const deletedProduct = await popularProductModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Popular product not found" });
        }
        res.json({ message: "Popular product deleted successfully", deletedProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// controller for admin to delete a product from offer products list 
async function deleteOfferProduct(req, res) {
    const {id} = req.params;
    try {
        const deletedProduct = await offerProductModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Offer product not found" });
        }
        res.json({ message: "Offer product deleted successfully", deletedProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports = {
    login,
    getAllPopularProducts,
    getAllOfferProducts,
    addProductInPopularProduct,
    addProductInOfferProduct,
    deletePopularProduct,
    deleteOfferProduct
};