const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

/*
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
];
*/

// CREATE - Criar um novo usuário
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

// READ - Listar todos os usuários
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

// READ - Buscar usuário por ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// UPDATE - Atualizar um usuário
app.put('/users/:id', (req, res) => {
    const { name, email } = req.body;
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        user.name = name || user.name;
        user.email = email || user.email;
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// DELETE - Deletar um usuário
app.delete('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index !== -1) {
        users.splice(index, 1);
        res.status(200).json({ message: 'User deleted' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

module.exports = app;
