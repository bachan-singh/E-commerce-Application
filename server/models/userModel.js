const db = require('../config/db');

const User = {
    // Creating a new User
    createUser : (user, callback) => {
        db.query(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [user.username, user.email, user.password],
            (err, result) => {
                if(err) return callback(err, null)
                callback(null, result.insertId)
            }
        )
    },
    // Get User Details by using thier Email
    getUserByEmail : (email, callback) => {
        db.query(
            'SELECT * FROM users WHERE email = ?', [email], 
            (err, results) => {
                if(err) return callback(err, null)
                callback(null, results.length > 0 ? results[0] : null)

            }
        )
    }
}
module.exports = User