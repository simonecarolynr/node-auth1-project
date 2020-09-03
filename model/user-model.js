const db = require('../data/dbConfig')

// Add a user and hash the password
function addUser(userCredentials){
    return db("users")
        .insert(userCredentials)
}

// Log in the user, authenticate the credentials
function findBy(filter){
    return db("users")
        .select("id", "username", "password")
        .where(filter)
}

// Get all users, with authorization
function getAllUsers(){
    return db("users")
        .select("id", "username")
}

module.exports = {
    addUser,
    findBy,
    getAllUsers
}