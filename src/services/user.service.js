import { getRepository as repository } from 'typeorm';
import User from '../database/models/user';
import bcryptjs from 'bcryptjs';

export default class UserService {

    UserRepository() {
        return repository(User);
    }

    findAll() {
        return this.UserRepository().find();
    }

    async findOne(id) {
        const data = await this.UserRepository().findOne(id);
        if (data) {
            return data;
        } else {
            throw ({ message: 'user not found' });
        }
    }

    findByUsername(username) {
        return this.UserRepository().findOne({ username });
    }

    async save(User) {
        const { password } = User;
        console.log(password);
        User.password = await this.beforeCreate(password);
        console.log(User.password);
        return this.UserRepository().save(User);
    }

    delete(id) {
        const data = this.findOne(id);
        if (data) {
            return this.UserRepository().delete(id);
        }
    }

    update(data) {
        return this.UserRepository().save(data);
    }

    async beforeCreate(password) {
        const salt = bcryptjs.genSaltSync();
        return await bcryptjs.hashSync(password, salt);
    }

    async validPassword(password, checkPassword) {
        return await bcryptjs.compareSync(password, checkPassword);
    }

}