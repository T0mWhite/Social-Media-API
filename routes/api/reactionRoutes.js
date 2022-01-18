const router = require("express").Router();

// router.use('/thoughts/:thoughtId/reactions', reactionRoutes);

const {
  createReaction,
  deleteReactionById,
} = require("../../controllers/reactionController");

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(createReaction);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions")
  .delete(deleteReactionById);

module.exports = router;
