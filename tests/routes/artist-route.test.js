import request from 'supertest';
import ArtistService from '../../src/services/artist.service';
import init from '../../src/api';

const service = new ArtistService();

const data = {
    "id": 1,
    "name": "raisa",
    "photo": "test.jpg"
};

const artists = [{
        "id": 1,
        "name": "raisa",
        "photo": "test.jpg"
    },
    {
        "id": 2,
        "name": "jazz",
        "photo": "test.jpg"
    }
];

let server;
describe('artist route method get', () => {
    beforeEach(async() => {
        server = await init();
    });

    it('GET /artist/id should return object of artist', async() => {
            const saveArtist = await service.save(data);
            await service.findById(saveArtist.id);
            const response = await request(server).get('/artist/1');

            await expect(response.body).toMatchObject({
                "id": 1,
                "name": "raisa",
                "photo": "test.jpg"
            })
        }),

        afterEach(async() => {
            if (server) {
                server.close();
            }
        })
});

describe('artist route find all', () => {
    it('GET /artists should return an array of artist', async() => {
        let saveData = [];
        artists.forEach(async(element) => {
            saveData.push(await service.save(element));
        });

        const response = await request(server).get('/artists');
        service.findAll();

        await expect(response.body).toMatchObject(service.findAll());
    });
});

describe('artist route method delete ', () => {
    it('DELETE /artist/id should return message artist deleted when delete success', async() => {
        const saveArtist = await service.save(data);
        const response = await request(server).delete('/artist/1');

        await expect(response.body).toMatchObject({ "message": "artist deleted." });
    });
});

describe('artist route method post', () => {
    it('POST /artist should return an object of artist when post success', async() => {
        const response = await request(server).post('/artist').send({ "name": "maya", "photo": "jpeg" });
        await expect(response.statusCode).toBe(200);
    })
})

describe('artist route method put', () => {
    it('PUT /artist should return an object of artist when data updated', async() => {
        await request(server).post('/artist').send(data);
        const response = await request(server).put('/artist').send({ "id": data.id, "name": "salsabila" });
        await expect(response.statusCode).toBe(200);
    })
});