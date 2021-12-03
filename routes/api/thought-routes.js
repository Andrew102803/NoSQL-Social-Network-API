const router = require('express').Router();
const dateFormat = require('../../utils/dateFormat')

const {
    getThoughts,
    getThoughtByID,
    addThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');


// /api/thoughts/
router.route('/')
.get(getThoughts)

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
.get(getThoughtByID)

// /api/thoughts/:userId

router.route('/:UserId')
.post(addThought)

// /api/thoughts/:id



module.exports = router;