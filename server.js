const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const logger = require('morgan');

// Routers
const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// Use routers
app.use('/', indexRouter);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});