const { Thought } = require("../models");

module.exports = {
  // Create a new reaction
  addReaction(req, res) {
    const filter = { _id: req.params.thoughtId };
    const update = { $addToSet: { reactions: req.body } };
    Thought.findOneAndUpdate(filter, update, { runValidators: true, new: true })
      .then((reaction) => res.json(reaction))
      .catch((err) => res.status(500).json(err));
  },

  // Delete a reaction
  deleteReaction(req, res) {
    const filter = { _id: req.params.thoughtId };
    const update = { $pull: { reactions: { _id: req.params.reactionId } } };
    Thought.findOneAndUpdate(filter, update, { runValidators: true, new: true })
      .then((reaction) => res.json(reaction))
      .catch((err) => res.status(500).json(err));
  },
};
