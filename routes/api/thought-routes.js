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

// api/thoughts/:userId/
router.route('/:userId')
.post(addThought)

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
.get(getThoughtByID)
.put(updateThought)
.delete(deleteThought)

// /api/thoughts/:thoughtId/reactions



module.exports = router;