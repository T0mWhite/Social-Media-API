const mongoose = require("mongoose");
const connection = require("../config/connection");
const { addFriend } = require("../controllers/friendController");
const { User, Thought, Reaction } = require("../models");

connection.on("error", (error) => error);

connection.once("open", async () => {
  console.log("Connected to socialMediaDB - 💥 Dropping previous data 💥");

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create a variable to hold the reactions array
  let reactions;
  // Create the reactions
  async function seedReactions() {
    console.log("🌱 Seeding the reactions... 🌱");
    // Create the reactions
    try {
      reactions = [
        {
          body: "Boo! I don't like!🙃",
          username: "GabeLuvsAdidas",
        },
        {
          body: "Honestly I wish I had never read this...🕵️‍♀️",
          username: "GabeLuvsAdidas",
        },
        {
          body: "Really activates my almonds. 🧉",
          username: "DinnerSoon",
        },
        {
          body: "Great, thanks for this! 🎈",
          username: "Mankind",
        },
      ];
      console.log("🌻 Reactions have been seeded! 🌻");
    } catch (error) {
      console.log("💀 Reactions failed to seed! 💀");
      console.error(error);
    }
  }
  // Call the thought seed
  await seedReactions();

  // Create a variable to hold the thoughts array
  let thoughts;
  // Create the thoughts
  async function seedThoughts() {
    console.log("🌱 Seeding the thoughts... 🌱");
    // Create the thoughts
    try {
      thoughts = await Thought.insertMany([
        {
          thoughtText: "Have you ever had a dream that...! 🥇",
          username: "DinnerSoon",
          reactions: [reactions[0]],
        },
        {
          thoughtText:
            "One of the greatest thinkers of our time, was myself... 🎇",
          username: "GabeLuvsAdidas",
          reactions: [reactions[2]],
        },
        {
          thoughtText: "Just something to think about... 🤔",
          username: "DinnerSoon",
          reactions: [reactions[1]],
        },
        {
          thoughtText:
            "...but don't let it distract you from the fact that in 1998, The Undertaker threw Mankind off Hell In A Cell, and plummeted 16 ft through an announcer's table. 🕵️‍♀️",
          username: "Mankind",
          reactions: [reactions[3]],
        },
      ]);
      console.log("🌻 Thoughts have been seeded! 🌻");
    } catch (error) {
      console.log("💀 Thoughts failed to seed! 💀");
      console.error(error);
    }
  }
  // Call the thought seed
  await seedThoughts();

  // Create a variable to hold the users array
  let users;
  // Create a variable to hold the friends array
  let friends;
  // Seed the users
  async function seedUsers() {
    console.log("🌱 Seeding the users... 🌱");
    // Create the users
    try {
      users = await User.insertMany([
        {
          username: "GabeLuvsAdidas",
          email: "tracksuitman@gmail.com",
          thoughts: [thoughts[1]],
        },
        {
          username: "DinnerSoon",
          email: "reallyneedsomefood@gmail.com",
          thoughts: [thoughts[0], thoughts[2]],
        },
        {
          username: "Mankind",
          email: "hell-in-a-cell@gmail.com",
          thoughts: [thoughts[3]],
        },
      ]);
      console.log("🌻 Users have been seeded! 🌻");
    } catch (error) {
      console.log("💀 Users failed to seed! 💀");
      console.error(error);
    }
  }
  // Call the user seed
  await seedUsers();

  // Populate the friends array after the users are created
  async function addFriend() {
    console.log("🌱 Giving Gabe a friend... 🌱");
    const gabesFriend = ObjectId(users[2]._id);
    await console.log(gabesFriend);
    await console.log(gabesFriend._id);
    const filter = { username: "GabeLuvsAdidas" };
    const update = { $addToSet: { friends: gabesFriend._id } };
    try {
      User.findOneAndUpdate(filter, update, { runValidators: true, new: true });
      console.log("🌻 Gabe made a new friend! 🌻");
    } catch (error) {
      console.log("💀 Gabe doesn't have a friend! 💀");
      console.error(error);
    }
  }

  await addFriend();

  process.exit();
});
