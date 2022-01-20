const { User } = require("../models");

module.exports = {
  // Add a friend to a user
  addFriend(req, res) {
    const filter = { _id: req.params.userId };
    const update = { $addToSet: { friends: req.params.friendId } };
    User.findOneAndUpdate(filter, update, { runValidators: true, new: true })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // Delete a friend from a user
  deleteFriend(req, res) {
    const filter = { _id: req.params.userId };
    const update = { $pull: { friends: req.params.friendId } };
    User.findOneAndUpdate(filter, update, { runValidators: true, new: true })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
};
