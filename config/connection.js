const { connect, connection } = require("mongoose");

const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost:27017/socialMediaDB";

// Wrap mongoose around the local connection to MongoDB
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose.connect(
//   connectionStringURI,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err, client) => {
//     db = client.db();
//     // Drops any documents, if they exist
//     db.collection("socialMediaDB").deleteMany({});
//     // Adds data to database
//     db.collection("socialMediaDB").insertMany(data, (err, res) => {
//       if (error) {
//         return console.log(error.message);
//       }
//       console.log(res.ops);
//     });
//     console.log("Connected to database: socialmediadb!");
//     app.listen(port, () => {
//       console.log(`Example app listening at http://localhost:${port}`);
//     });
//   }
// );

// Export connection
module.exports = connection;
