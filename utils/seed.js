const connection = require("../config/connection");
const { User, Thought } = require("../models");
// const { getRandomName, getRandomAssignments } = require('./data');

connection.on("error", (error) => error);

connection.once("open", async () => {
  console.log("Connected to socialMediaDB");

  // Drop existing courses
  await User.deleteMany({});

  // Drop existing students
  await Thought.deleteMany({});
});

// Create empty array to hold the students
//   const users = [];

//   // Get some random assignment objects using a helper function that we imported from ./data
//   const assignments = getRandomAssignments(20);

//   // Loop 20 times -- add students to the students array
//   for (let i = 0; i < 20; i++) {
//     const fullName = getRandomName();
//     const first = fullName.split(' ')[0];
//     const last = fullName.split(' ')[1];
//     const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

//     students.push({
//       first,
//       last,
//       github,
//       assignments,
//     });
//   }

//   // Add students to the collection and await the results
//   await Student.collection.insertMany(students);

//   // Add courses to the collection and await the results
//   await Course.collection.insertOne({
//     courseName: 'UCLA',
//     inPerson: false,
//     students: [...students],
//   });

//   // Log out the seed data to indicate what should appear in the database
//   console.table(students);
//   console.table(assignments);
//   console.info('Seeding complete! 🌱');
//   process.exit(0);
// });

// Create user test function
const createUser = async () => {
  try {
    const user = await User.create({
      username: "Tommy",
      email: "test@tEST.com",
    });
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

createUser();

// Create thought test function
const createThought = async () => {
  try {
    const thought = await Thought.create({
      thoughtText: "Looks cool!",
      username: "Tommy",
    });
    console.log(thought);
  } catch (error) {
    console.log(error);
  }
};

createThought();
