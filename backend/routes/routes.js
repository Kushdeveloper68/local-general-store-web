const express = require("express");
const router = express.Router();
const jwtMiddleware = require("../middlewares/jwtMiddleware")
const {
    login,
    getAllPopularProducts,
    getAllOfferProducts,
    addProductInPopularProduct,
    addProductInOfferProduct,
    deletePopularProduct,
    deleteOfferProduct} = require("../controllers/adminControl");

//  route for admin login
router.post("/login", login);

// authentiicated route to get all popular products
router.get("/popular-products", getAllPopularProducts);
// authentiicated route to get all offer products
router.get("/offer-products",  getAllOfferProducts);
// authentiicated route to add new popular product
router.post("/popular-products", jwtMiddleware, addProductInPopularProduct);
// authentiicated route to add new offer product
router.post("/offer-products", jwtMiddleware, addProductInOfferProduct);
// authentiicated route to delete a popular product
router.delete("/popular-products/:id", jwtMiddleware, deletePopularProduct);
// authentiicated route to delete an offer product
router.delete("/offer-products/:id", jwtMiddleware, deleteOfferProduct);

module.exports = router;