import ArtistService from '../../src/services/artist.service';
import init from '../../src/api';

const artistService = new ArtistService();

const data = {
    "id": 1,
    "name": "raisa",
    "photo": "test.jpg",
};

const artists = [{
        "id": 1,
        "name": "raisa",
        "photo": "test.jpg",
    },
    {
        "id": 2,
        "name": "isyana",
        "photo": "test.jpg",
    }
]

let server;

describe('find artist', () => {
    beforeEach(async() => {
        server = await init();
    });

    it('should return an object of artist', async() => {
        const saveData = await artistService.save(data);
        const artist = await artistService.findById(saveData.id);

        expect(artist).toMatchObject({
            id: saveData.id,
            name: saveData.name,
            photo: saveData.photo,
        })
    });

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});

describe('find all artist', () => {

    it('should return an array of artist', async() => {
        let saveArtist = [];

        for (let index = 0; index < artists.length; index++) {
            saveArtist.push(await artistService.save(artists[index]));
        }

        const result = await artistService.findAll();

        expect(result).toEqual(expect.arrayContaining(saveArtist));

    })

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});

describe('find artist by genre ', () => {

    beforeEach(async() => {
        await artistService.artistRepo().clear();
    });

    it('should return an array of artist grouping by genre', async() => {
        let saveArtist = {
            "id": 1,
            "name": "raisa",
            "photo": "test.jpg",
            "genreId": 1,
        };

        await artistService.save(saveArtist);
        const result = await artistService.findByGenreId(saveArtist.genreId);

        expect(result).toEqual(expect.arrayContaining([{
            "id": 1,
            "name": "raisa",
            "photo": "test.jpg",
        }]));
    });

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});

describe('delete artist', () => {
    beforeEach(async() => {
        await artistService.artistRepo().clear();
    });

    it('should delete an object of artist when artist is already exist', async() => {
        const saveData = await artistService.save(data);
        let artist = await artistService.findAll();

        artist = await artistService.delete(saveData.id);

        expect(artist).toEqual({ "raw": [] });
    })

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});

describe('create artist', () => {
    beforeEach(async() => {
        await artistService.artistRepo().clear();
    });

    it('should added length when artist succesfull created', async() => {
        const lengthBefore = await artistService.findAll();
        await artistService.save(data);
        const lengthAfter = await artistService.findAll();

        expect(lengthAfter.length).toBe(lengthBefore.length + 1);
    })

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});

describe('update artist', () => {
    beforeEach(async() => {
        await artistService.artistRepo().clear();
    });

    it('should update when id found ', async() => {
        const newData = {
            id: 1,
            name: "yaya",
            photo: "wakwaw.jpg"
        }
        await artistService.save(data);
        const update = await artistService.update(newData);

        expect(newData).toMatchObject(update);
    })

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});