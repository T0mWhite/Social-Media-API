const router = require("express").Router();
// const friendRoutes = require("./friendRoutes");

// router.use('/:userId/friends', friendRoutes);

const {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require("../../controllers/userController");

const {
  addFriend,
  deleteFriend,
} = require("../../controllers/friendController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router
  .route("/:userId")
  .get(getUserById)
  .delete(deleteUserById)
  .put(updateUserById);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);



module.exports = router;
