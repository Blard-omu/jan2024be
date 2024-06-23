// controllers/auth.js
const data = [
  {
    _id: 1,
    name: "Product 1",
    body: "This is product 1 body",
  },
  {
    _id: 2,
    name: "Product 2",
    body: "This is product 2 body",
  },
  {
    _id: 3,
    name: "Product 3",
    body: "This is product 3 body",
  },
];

export const myControllerFunction = (req, res) =>
  res.json({ success: true, message: "Node js server running.." });

export const getAllProducts = (req, res) => {
  res.json({
    success: true,
    message: "Products retrieved successfully",
    products: data,
  });
};

export const getOneProduct = (req, res) => {
    const { productId } = req.params;
    console.log(req.params);
  
    const product = data.find((p) => p._id.toString() === productId);
  
    if (product) {
      res.json({
        success: true,
        message: "Product retrieved successfully",
        product: product,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
  };
  