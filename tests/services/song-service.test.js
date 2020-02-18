import SongService from '../../src/services/song.services';
import init from '../../src/api';

const songService = new SongService();

const data = {
    "id": 1,
    "title": "mantan terindah",
    "duration": "00:03:26"
};

const songs = [{
        "id": 1,
        "title": "mantan terindah",
        "duration": "00:03:26"
    },
    {
        "id": 2,
        "title": "lebih indah",
        "duration": "00:03:26"
    }
]

let server;

describe('find song', () => {
    beforeEach(async() => {
        server = await init();
    });

    it('should return an object of song', async() => {
        const saveData = await songService.save(data);
        const song = await songService.findById(saveData.id);

        expect(song).toMatchObject({
            id: saveData.id,
            title: saveData.title,
            duration: saveData.duration,
        })
    });

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});

describe('find all song', () => {

    it('should return an array of song', async() => {
        let savesong = [];

        for (let index = 0; index < songs.length; index++) {
            savesong.push(await songService.save(songs[index]));
        }

        const result = await songService.findAll();

        expect(result).toEqual(expect.arrayContaining(savesong));

    })

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});

describe('find song by arist ', () => {

    beforeEach(async() => {
        await songService.songRepo().clear();
    });

    it('should return an array of song grouping by artist', async() => {
        let savesong = {
            "id": 1,
            "title": "mantan terindah",
            "duration": "00:03:26",
            "artistId": 1
        };

        await songService.save(savesong);
        const result = await songService.findByArtistId(savesong.artistId);

        expect(result).toEqual(expect.arrayContaining([{
            "id": 1,
            "title": "mantan terindah",
            "duration": "00:03:26"
        }]));
    });

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});

describe('delete song', () => {
    beforeEach(async() => {
        await songService.songRepo().clear();
    });

    it('should delete an object of song when song is already exist', async() => {
        const saveData = await songService.save(data);
        let song = await songService.findAll();

        song = await songService.delete(saveData.id);

        expect(song).toEqual({ "raw": [] });
    })

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});

describe('create song', () => {
    beforeEach(async() => {
        await songService.songRepo().clear();
    });

    it('should added length when song succesfull created', async() => {
        const lengthBefore = await songService.findAll();
        await songService.save(data);
        const lengthAfter = await songService.findAll();

        expect(lengthAfter.length).toBe(lengthBefore.length + 1);
    })

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});

describe('update song', () => {
    beforeEach(async() => {
        await songService.songRepo().clear();
    });

    it('should update when id found ', async() => {
        const newData = {
            id: 1,
            "title": "mantan",
            "duration": "00:03:56"
        }
        await songService.save(data);
        const update = await songService.update(newData);

        expect(newData).toMatchObject(update);
    })

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});