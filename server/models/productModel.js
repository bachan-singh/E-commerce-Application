const db = require('../config/db')

const Product = {
    create: (product, callback) => {
        db.query(
            `INSERT INTO products (name, description, price, stock_quantity, category, image_url, created_at) 
            VALUES (?, ?, ?, ?, ?, ?, NOW())`,
            [product.name, product.description, product.price, product.stock_quantity, product.category, product.image_url],
            (err, result) => {
              if (err) return callback(err, null);
              callback(null, result.insertId);
            }
        )
    },
    getAll: (callback) => {
        db.query(
            `SELECT * FROM products ORDER BY created_at DESC`,
            (err, results) => {
                if (err) return callback(err, null);
                callback(null, results);
            }
        )
    }
}
module.exports = Product