const { User } = require("../models");

module.exports = {
  // Add a freind to a user
  addFriend(req, res) {
    User.updateOne(
      {
        _id: req.params.userId,
    },
    { key: "friends", value: `${req.params.friendId}` },
      { runValidators: true, new: true }
    )
      // User.findOneAndUpdate(
      //   { _id: req.params.userId },
      //   {
      //     $set: {
      //       friends: req.params.friendId,
      //     },
      //   },
      //   { runValidators: true, new: true }
      // )
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // Delete a friend from a user
  deleteFriend(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No such user exists" })
          : User.findOneAndUpdate(
              { users: req.params.userId },
              { $pull: { users: req.params.userId } },
              { new: true }
            )
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
