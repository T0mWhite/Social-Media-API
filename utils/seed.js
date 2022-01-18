const mongoose = require("mongoose");
const connection = require("../config/connection");
const { User, Thought, Reaction } = require("../models");

connection.on("error", (error) => error);

connection.once("open", async () => {
  console.log("Connected to socialMediaDB - 💥 Dropping previous data 💥");

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing reactions
  // await Reaction.deleteMany({});

  // Create the users
  await User.create(
    {
      username: "GabeLuvsAdidas",
      email: "tracksuitman@gmail.com",
    },
    {
      username: "DinnerSoon",
      email: "reallyneedsomefood@gmail.com",
    },
    {
      username: "Mankind",
      email: "threwunderatkeroffhellinacell@gmail.com",
    }
  );
});

process.exit();
// const users = {
//   model: "user",
//   documents: [
//     {
//       _id: "123123123",
//       username: "GabeLuvsAdidas",
//       email: "tracksuitman@gmail.com",
//     },
//     {
//       _id: "123456789",
//       username: "DinnerSoon",
//       email: "reallyneedsomefood@gmail.com",
//     },
//     {
//       _id: "987654321",
//       username: "Mankind",
//       email: "threwunderatkeroffhellinacell@gmail.com",
//     },
//   ],
// };

// Add users to the collection and await the results
// await User.collection.insertMany(users);
// });

// Create the thoughts
// const thoughts = [
//   new Thought({
//     thoughtText: "Wow! Great thought! 🥇",
//     username: "DinnerSoon",
//   }),
//   new Thought({
//     thoughtText: "One of the greatest thinkers of our time... 🎇",
//     username: "GabeLuvsAdidas",
//   }),
//   new Thought({
//     thoughtText: "Just something to think about... 🤔",
//     username: "DinnerSoon",
//   }),
//   new Thought({
//     thoughtText:
//       "...but don't let it distract you from the fact that in 1998, The Undertaker threw Mankind off Hell In A Cell, and plummeted 16 ft through an announcer's table. 🕵️‍♀️",
//     username: "Mankind",
//   }),
// ];

// thoughts.push(thoughts);

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
