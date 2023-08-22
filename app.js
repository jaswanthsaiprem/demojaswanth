const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Dummy data for users and blog posts
const users = [];
const blogPosts = [];

app.get('/', (req, res) => {
    res.redirect('/login.html');
});

app.get('/login.html', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Handle user login logic (e.g., check credentials)
    // For simplicity, let's assume any username and password is valid
    res.redirect('/dashboard.html');
});

app.get('/dashboard.html', (req, res) => {
    // Render dashboard with blog posts
    res.sendFile(__dirname + '/views/dashboard.html');
});

app.get('/new-blog.html', (req, res) => {
    res.sendFile(__dirname + '/views/newblog.html');
});

app.post('/save-blog', (req, res) => {
    const { title, content } = req.body;
    // Handle saving the blog post (push to dummy data for simplicity)
    blogPosts.push({ title, content });
    res.redirect('/dashboard.html');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
