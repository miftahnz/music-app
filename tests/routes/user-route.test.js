import request from 'supertest';
import userService from '../../src/services/user.service';
import init from '../../src/api';

const service = new userService();

const data = {
    "id": 1,
    "handphone": "9876543",
    "username": " sasha",
    "password": "miftah"
};

const users = [{
        "id": 1,
        "handphone": "09876543",
        "username": " sasha",
        "password": "miftah"
    },
    {
        "id": 2,
        "handphone": "09876545",
        "username": " dodo",
        "password": "miftah"
    }
];

let server;
describe('user route method get', () => {
    beforeEach(async() => {
        server = await init();
    });

    it('GET /user/id should return object of user', async() => {
            const saveUser = await service.save(data);
            await service.findOne(saveUser.id);
            const response = await request(server).get('/user/1');

            await expect(response.body).toMatchObject(data)
        }),

        afterEach(async() => {
            if (server) {
                server.close();
            }
        })
});

describe('user route find all', () => {
    it('GET /users should return an array of user', async() => {
        let saveData = [];
        users.forEach(async(element) => {
            saveData.push(await service.save(element));
        });

        const response = await request(server).get('/users');
        service.findAll();

        await expect(response.body).toMatchObject(service.findAll());
    });
});

describe('user route method delete ', () => {
    it('DELETE /user/id should return message user deleted when delete success', async() => {
        const saveUser = await service.save(data);
        const response = await request(server).delete('/user/1');

        await expect(response.statusCode).toBe(204);
    });
});

describe('user route method post', () => {
    it('POST /users should return an object of user when post success', async() => {
        const response = await request(server).post('/users').send(data);
        await expect(response.statusCode).toBe(201);
    })
})

describe('user route method put', () => {
    it('PUT /user should return an object of user when data updated', async() => {
        await request(server).post('/users').send(data);
        const newData = {
            "id": 1,
            "handphone": "9876543",
            "username": " sasha"
        };
        const response = await request(server).put('/user').send(newData);
        await expect(response.statusCode).toBe(200);
    })
})