const Product = require("../models/productModel");

// Creating a new Product
exports.createProduct = (req, res) => {
    const { name, description, price, stock_quantity, category, image_url } = req.body;

    Product.create(
        { name, description, price, stock_quantity, category, image_url },
        (err, productId) => {
            if (err) return res.status(500).json({ error: err.message });
            res
                .status(201)
                .json({ message: "Product created successfully", productId });
        }
    );
};

// Fetching all the products
exports.getAllProducts = (req, res) => {
    Product.getAll((err, products) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(products);
    });
};
