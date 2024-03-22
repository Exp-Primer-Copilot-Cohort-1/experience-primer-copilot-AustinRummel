// Create web server
const express = require('express')
const app = express()
const port = 3000

// Use the 'public' directory to serve static files
app.use(express.static('public'))

// Use the 'views' directory to serve views
app.set('views', './views')

// Use the 'ejs' engine to render views
app.set('view engine', 'ejs')

// Path: comments.js
// Create the comments array
let comments = []

// Path: comments.js
// Add a new comment
app.get('/comments/new', (req, res) => {
  res.render('comments/new')
})

// Path: comments.js
// Create a new comment
app.post('/comments', (req, res) => {
  let comment = req.body.comment
  comments.push(comment)
  res.redirect('/comments')
})

// Path: comments.js
// Show all comments
app.get('/comments', (req, res) => {
  res.render('comments/index', { comments: comments })
})

// Path: comments.js
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

// Path: comments.js
// Create a new comment form
app.get('/comments/new', (req, res) => {
  res.render('comments/new')
})

// Path: comments.js
// Create a new comment
app.post('/comments', (req, res) => {
  let comment = req.body.comment
  comments.push(comment)
  res.redirect('/comments')
})

// Path: comments.js
// Show all comments
app.get('/comments', (req, res) => {
  res.render('comments/index', { comments: comments })
})

// Path: comments.js
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

// Path: comments.js
// Add a new comment
app.post('/comments', (req, res) => {
  let comment = req.body.comment
  comments.push(comment)
  res.redirect('/comments')
})

// Path: comments.js
// Create a new comment form
app.get('/comments/new', (req, res) => {
  res.render('comments/new')
})

// Path: comments.js
// Show all comments
app.get('/comments', (req, res) => {
  res.render('comments/index', { comments: comments })