import UserService from '../../src/services/user.service';
import init from '../../src/api';

const userService = new UserService();

const data = {
    "id": 1,
    "handphone": "02188361035",
    "username": "mimin",
    "password": "12345678"
};

const users = [{
        "id": 1,
        "handphone": "02188361035",
        "username": "mimin",
        "password": "12345678"
    },
    {
        "id": 2,
        "handphone": "02188361035",
        "username": "minah",
        "password": "12345678"
    },
]

let server;

describe('find user', () => {
    beforeEach(async() => {
        server = await init();
    });

    it('should return an object of user', async() => {
        const saveData = await userService.save(data);
        const user = await userService.findOne(saveData.id);

        expect(user).toMatchObject({
            id: saveData.id,
            username: saveData.username,
            handphone: saveData.handphone,
            password: saveData.password,
        })
    });

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});

describe('find all user', () => {
    beforeEach(async() => {
        await userService.UserRepository().clear();
    });

    it('should return an array of object user', async() => {
        let saveUser = [];

        for (let index = 0; index < users.length; index++) {
            saveUser.push(await userService.save(users[index]));
        }

        const members = await userService.findAll();

        expect(members).toEqual(expect.arrayContaining(saveUser));
    });

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});

describe('find by username', () => {
    beforeEach(async() => {
        await userService.UserRepository().clear();
    });

    it('should return an object of user when username already exist', async() => {
        const saveData = await userService.save(data);
        const user = await userService.findByUsername(saveData.username);

        expect(user).toMatchObject({
            id: saveData.id,
            username: saveData.username,
            handphone: saveData.handphone,
            password: saveData.password,
        })
    })
    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
})

describe('delete user', () => {
    beforeEach(async() => {
        await userService.UserRepository().clear();
    });

    it('should delete an object of user when user is already exist', async() => {
        const saveData = await userService.save(data);
        let user = await userService.findAll();

        user = await userService.delete(saveData.id);

        expect(user).toEqual({ "raw": [] });
    })

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});

describe('create user', () => {
    beforeEach(async() => {
        await userService.UserRepository().clear();
    });

    it('should added length when user succesfull created', async() => {
        const lengthBefore = await userService.findAll();
        await userService.save(data);
        const lengthAfter = await userService.findAll();

        expect(lengthAfter.length).toBe(lengthBefore.length + 1);
    })

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});

describe('update user', () => {
    beforeEach(async() => {
        await userService.UserRepository().clear();
    });

    it('should update when id found ', async() => {
        const lengthBefore = await userService.findAll();
        const newData = {
            id: 1,
            username: "yaya",
            handphone: "0218887667",
            password: "yuhu123"
        }
        await userService.save(data);
        const update = await userService.update(newData);

        expect(newData).toMatchObject(update);
    })

    afterEach(async() => {
        if (server) {
            server.close();
        }
    });
});