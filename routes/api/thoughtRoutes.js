const router = require("express").Router();
const reactionRoutes = require("./reactionRoutes");


router.use('/:thoughtId/reactions', reactionRoutes);

const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/thoughts").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route("thoughts/:thoughtId")
  .get(getThoughtById)
  .delete(deleteThoughtById)
  .put(updateThoughtById);

module.exports = router;
