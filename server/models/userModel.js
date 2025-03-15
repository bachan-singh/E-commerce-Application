const db = require('../config/db');

const User = {
    // Creating a new User
    createUser : (user, callback) => {
        db.query(` INSERT INTO users (name, email, password) VALUES (? ,?, ?)`,
            [user.name, user.email, user.password],
            (err, result) => {
                if(err) return callback(err, null)
                callback(null, result.insertId)
            }
        )
    }
}
module.exports = User