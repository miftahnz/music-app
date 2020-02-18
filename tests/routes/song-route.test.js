import request from 'supertest';
import SongService from '../../src/services/song.services';
import init from '../../src/api';

const service = new SongService();

const data = {
    "id": 1,
    "title": "mantan terindah",
    "duration": "00:03:45"
};

const songs = [{
        "id": 1,
        "title": "mantan terindah",
        "duration": "00:03:45"
    },
    {
        "id": 2,
        "title": "mantan",
        "duration": "00:03:45"
    }
];

let server;
describe('song route method get', () => {
    beforeEach(async() => {
        server = await init();
    });

    it('GET /song/id should return object of song', async() => {
            const saveSong = await service.save(data);
            await service.findById(saveSong.id);
            const response = await request(server).get('/song/1');

            await expect(response.body).toMatchObject({
                "id": 1,
                "title": "mantan terindah",
                "duration": "00:03:45"
            })
        }),

        afterEach(async() => {
            if (server) {
                server.close();
            }
        })
});

describe('song route find all', () => {
    it('GET /songs should return an array of song', async() => {
        let saveData = [];
        songs.forEach(async(element) => {
            saveData.push(await service.save(element));
        });

        const response = await request(server).get('/songs');
        service.findAll();

        await expect(response.body).toMatchObject(service.findAll());
    });
});

describe('song route method delete ', () => {
    it('DELETE /song/id should return message song deleted when delete success', async() => {
        const saveSong = await service.save(data);
        const response = await request(server).delete('/song/1');

        await expect(response.body).toMatchObject({ "message": "song deleted." });
    });
});

describe('song route method post', () => {
    it('POST /song should return an object of song when post success', async() => {
        const response = await request(server).post('/song').send(data);
        await expect(response.statusCode).toBe(200);
    })
})

describe('song route method put', () => {
    it('PUT /song should return an object of song when data updated', async() => {
        await request(server).post('/song').send(data);
        const response = await request(server).put('/song').send({ "id": data.id, "title": "pergilah kasih" });
        await expect(response.statusCode).toBe(200);
    })
})