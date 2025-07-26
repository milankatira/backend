// app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

let users = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 28, country: "USA", role: "Admin" },
    { id: 2, name: "Bob", email: "bob@example.com", age: 34, country: "Canada", role: "User" },
    { id: 3, name: "Charlie", email: "charlie@example.com", age: 30, country: "UK", role: "Editor" },
    { id: 4, name: "Diana", email: "diana@example.com", age: 25, country: "Germany", role: "User" },
    { id: 5, name: "Ethan", email: "ethan@example.com", age: 32, country: "India", role: "Admin" },
    { id: 6, name: "Fiona", email: "fiona@example.com", age: 29, country: "France", role: "User" },
    { id: 7, name: "George", email: "george@example.com", age: 41, country: "USA", role: "Editor" },
    { id: 8, name: "Hannah", email: "hannah@example.com", age: 27, country: "Brazil", role: "User" },
    { id: 9, name: "Ian", email: "ian@example.com", age: 36, country: "Australia", role: "User" },
    { id: 10, name: "Jasmine", email: "jasmine@example.com", age: 31, country: "USA", role: "Admin" },
    { id: 11, name: "Kyle", email: "kyle@example.com", age: 26, country: "Netherlands", role: "User" },
    { id: 12, name: "Laura", email: "laura@example.com", age: 33, country: "India", role: "Editor" },
    { id: 13, name: "Michael", email: "michael@example.com", age: 38, country: "Canada", role: "Admin" },
    { id: 14, name: "Nina", email: "nina@example.com", age: 24, country: "UK", role: "User" },
    { id: 15, name: "Oscar", email: "oscar@example.com", age: 35, country: "Spain", role: "User" },
    { id: 16, name: "Paula", email: "paula@example.com", age: 29, country: "Italy", role: "Editor" },
    { id: 17, name: "Quentin", email: "quentin@example.com", age: 37, country: "USA", role: "User" },
    { id: 18, name: "Rachel", email: "rachel@example.com", age: 28, country: "Germany", role: "Admin" },
    { id: 19, name: "Sam", email: "sam@example.com", age: 34, country: "Australia", role: "Editor" },
    { id: 20, name: "Tina", email: "tina@example.com", age: 30, country: "India", role: "User" }
];

// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Get a single user
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
});

// Create a new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: "Missing name or email" });
    }
    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Edit (update) user
app.put('/users/:id', (req, res) => {
    const { name, email } = req.body;
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: "User not found" });
    if (name) user.name = name;
    if (email) user.email = email;
    res.json(user);
});

// Delete user
app.delete('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: "User not found" });
    users.splice(index, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
