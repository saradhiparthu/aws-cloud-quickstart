const express = require('express');
const app = express();

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World from Express on Lambda!');
});

app.get('/greetings', (req, res) => {
    res.json({ message: 'Hello from /hello endpoint!' });
});

module.exports = app;
