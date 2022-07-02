const router = require("express").Router();
const Cart = require("../models/Cart");
const {
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
  verifyToken,
} = require("./verifyToken");

// create cart
// any user can create cart so verifyToken only
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).send(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//  user can update their own cart so verifyToken and auth token
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE Cart
// user can delete their own cart so verify token and auth
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET User cart
router.get("/find/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.Id });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL cart of all user // only admin can access this
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
