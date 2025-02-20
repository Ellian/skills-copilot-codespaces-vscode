// Create web server
// Create a web server using the Express framework, and define the routes for the comments.
const express = require('express');
const bodyParser = require('body-parser');
const comments = require('./comments');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Define the route for getting all comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// Define the route for adding a comment
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.addComment(comment);
  res.status(201).send();
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});