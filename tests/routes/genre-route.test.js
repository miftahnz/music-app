import request from 'supertest';
import genreService from '../../src/services/genre.service';
import init from '../../src/api';

const service = new genreService();

const data = {
    "id": 1,
    "genre": "pop"
};

const genres = [{
        "id": 1,
        "genre": "pop"
    },
    {
        "id": 2,
        "genre": "rock"
    }
];

let server;
describe('genre route method get', () => {
    beforeEach(async() => {
        server = await init();
    });

    it('GET /genre/id should return object of genre', async() => {
            const saveGenre = await service.save(data);
            await service.findById(saveGenre.id);
            const response = await request(server).get('/genre/1');

            await expect(response.body).toMatchObject({
                "id": 1,
                "genre": "pop"
            })
        }),

        afterEach(async() => {
            if (server) {
                server.close();
            }
        })
});

describe('genre route find all', () => {
    it('GET /genres should return an array of genre', async() => {
        let saveData = [];
        genres.forEach(async(element) => {
            saveData.push(await service.save(element));
        });

        const response = await request(server).get('/genres');
        service.findAll();

        await expect(response.body).toMatchObject(service.findAll());
    });
});

describe('genre route method delete ', () => {
    it('DELETE /genre/id should return message genre deleted when delete success', async() => {
        const saveGenre = await service.save(data);
        const response = await request(server).delete('/genre/1');

        await expect(response.body).toMatchObject({ "message": "genre deleted." });
    });
});

describe('genre route method post', () => {
    it('POST /genre should return an object of genre when post success', async() => {
        const response = await request(server).post('/genre').send({ "genre": "dangdut" });
        await expect(response.statusCode).toBe(200);
    })
})

describe('genre route method put', () => {
    it('PUT /genre should return an object of genre when data updated', async() => {
        await request(server).post('/genre').send({ "genre": "dangdut" });
        const response = await request(server).put('/genre').send({ "id": 17, "genre": "kpop" });
        await expect(response.statusCode).toBe(200);
    })
})