import { getRepository } from 'typeorm';
import Genre from '../database/models/genre';

export default class GenreService {
    genreRepo() {
        return getRepository(Genre);
    }

    findAll() {
        return this.genreRepo().find();
    }

    async findById(id) {
        const genre = await this.genreRepo().findOne(id);
        if (genre) {
            return genre;
        } else {
            throw ({ message: `genre with id ${id} not found` });
        }
    }

    save(data) {
        return this.genreRepo().save(data);
    }

    update(data) {
        return this.genreRepo().save(data);
    }

    async delete(id) {
        const genre = await this.findById(id);
        if (genre) {
            return await this.genreRepo().delete(id);
        }
    }
}