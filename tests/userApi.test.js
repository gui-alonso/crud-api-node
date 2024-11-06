const request = require('supertest');
const app = require('../src/app');

describe('User API', () => {
    it('should fetch all users', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it('should fetch a user by ID', async () => {
        const response = await request(app).get('/users/1');
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('John Doe');
    });

    it('should create a new user', async () => {
        const newUser = { name: 'Tom Hanks', email: 'tom@example.com' };
        const response = await request(app).post('/users').send(newUser);
        expect(response.status).toBe(201);
        expect(response.body.name).toBe('Tom Hanks');
    });

    it('should update an existing user', async () => {
        const updatedUser = { name: 'John Updated' };
        const response = await request(app).put('/users/1').send(updatedUser);
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('John Updated');
    });

    it('should delete a user', async () => {
        const response = await request(app).delete('/users/1');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('User deleted');
    });
});
