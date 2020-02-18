import GenreService from '../../src/services/genre.service';
import init from '../../src/api';

const genreService = new GenreService();

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

describe('find genre', () => {
    beforeEach(async() => {
        server = await init();
    });

    it('should return an object of genre', async() => {
        const saveData = await genreService.save(data);
        const genre = await genreService.findById(saveData.id);

        expect(genre).toMatchObject({
            id: saveData.id,
            genre: saveData.genre,
        })
    });

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});

describe('find all genre', () => {
    beforeEach(async() => {
        await genreService.genreRepo().clear();
    });

    it('should return an array of object genre', async() => {
        let savegenre = [];

        for (let index = 0; index < genres.length; index++) {
            savegenre.push(await genreService.save(genres[index]));
        }

        const members = await genreService.findAll();

        expect(members).toEqual(expect.arrayContaining(savegenre));
    });

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});

describe('delete genre', () => {
    beforeEach(async() => {
        await genreService.genreRepo().clear();
    });

    it('should delete an object of genre when genre is already exist', async() => {
        const saveData = await genreService.save(data);
        let genre = await genreService.findAll();

        genre = await genreService.delete(saveData.id);

        expect(genre).toEqual({ "raw": [] });
    })

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});

describe('create genre', () => {
    beforeEach(async() => {
        await genreService.genreRepo().clear();
    });

    it('should added length when genre succesfull created', async() => {
        const lengthBefore = await genreService.findAll();
        await genreService.save(data);
        const lengthAfter = await genreService.findAll();

        expect(lengthAfter.length).toBe(lengthBefore.length + 1);
    })

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});

describe('update genre', () => {
    beforeEach(async() => {
        await genreService.genreRepo().clear();
    });

    it('should update when id found ', async() => {
        const newData = {
            id: 1,
            genre: "yaya"
        }
        await genreService.save(data);
        const update = await genreService.update(newData);

        expect(newData).toMatchObject(update);
    })

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});