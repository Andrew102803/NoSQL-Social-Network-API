const router = require('express').Router();

const {
    getUsers,
    addUser,
    getUserByID,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// /api/users
router.route('/')
.get(getUsers)
.post(addUser);

// /api/users/:id
router.route('/:id')
.get(getUserByID)
.put(updateUser)
.delete(deleteUser);


module.exports = router;