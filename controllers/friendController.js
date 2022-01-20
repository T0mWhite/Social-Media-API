const { User } = require("../models");

module.exports = {
  // Add a freind to a user
  addFriend(req, res) {
    const filter = { _id: req.params.userId };
    const update = { $addToSet: { friends: req.params.friendId } };
    console.log(req.params);
    console.log(filter);
    console.log(update);
    User.findOneAndUpdate(filter, update, { runValidators: true, new: true })

      // {
      //   _id: req.params.userId,
      // },
      // {
      //   $push: {friends: req.params.friendId},
      // },
      // { runValidators: true, new: true }

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
