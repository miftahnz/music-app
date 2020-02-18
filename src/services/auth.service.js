import { getRepository as Repository } from 'typeorm';
import UserService from '../services/user.service';
import User from '../database/models/user';
import Boom from '@hapi/boom';

const Service = new UserService();

export default class ServiceAuth {
    userRepo() {
        return Repository(User);
    }

    async validate(req, username, password) {
        const user = await Service.findByUsername(username);

        if (!user) return { valid: false };
        return { valid: true, credential: user };
    }

    async login(form) {
        const { username, password } = form;
        const user = await Service.findByUsername(username);

        if (user && await Service.validPassword(password, user.password)) {
            return user;
        } else {
            throw Boom.unauthorized('invalid login credentials');
        }
    }
}