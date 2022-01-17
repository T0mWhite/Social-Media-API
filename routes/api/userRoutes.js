const router = require("express").Router();

const {
  getUsers,
  createUser,
  getUserByID,
  deleteUserByID,
  addThought,
  removeThought,
} = require("../../controllers/userController");
// const {
//     getStudents,
//     getSingleStudent,
//     createStudent,
//     deleteStudent,
//     addAssignment,
//     removeAssignment,
//   } = require('../../controllers/studentController');

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userID
router.route("/:userId").get(getUserByID).delete(deleteUserByID);

// /api/users/:userId/thoughts
router.route("/:userID/thoughts").post(addThought);

// /api/users/:userId/thoughts/:thoughtID
router.route("/:userId/thoughts/:thpughtId").delete(removeThought);

module.exports = router;
