const router = require("express").Router();
// const reactionRoutes = require("./reactionRoutes");

// router.use('/:thoughtId/reactions', reactionRoutes);

const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
} = require("../../controllers/thoughtController");

const {
  addReaction,
  deleteReactionById,
  deleteReaction,
} = require("../../controllers/reactionController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getThoughtById)
  .delete(deleteThoughtById)
  .put(updateThoughtById);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
