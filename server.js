const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const cwd = process.cwd();

// Use env if provided, connect on port 3001
const PORT = process.env.PORT || 3001;

// Use express
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('01-Activities')
  ? cwd.split('/01-Activities/')[1]
  : cwd;

// Require models
// const { User, Thought } = require("./models");

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});
