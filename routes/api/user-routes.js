const router = require('express').Router();

const {
    getUsers,
    addUser
} = require('../../controllers/user-controller');

// /api/users
router.route('/')
.get(getUsers)
.post(addUser);



module.exports = router;