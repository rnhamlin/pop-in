// user controller

//import model
const {Thought, User} = require("../models");

// get all users
getAllUsers(req, res) {
    User.find({}).then(dbUserData => res.json(dbUserData)).catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
};

// get one user by id
getUserById({ params }, res) {
    User.findOne({ _id: params.id}).then(dbUserData => {
        // send error message if no user is found
        if (!dbUserData) {
            res.json(404).json({message: "No username found with this id!"});
            return;
        }
        res.json(dbUserData);
    }).catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
}

// create a user
createUser({body}, res) {
    User.createUser(body).then((user) => res.json(user));
};



// update user by id



// delete user by id



// BONUS: remove a user's associated thoughts when user is deleted



// create friend



// delete friend


// export code

module.exports = getAllUsers;