import { getRepository } from 'typeorm';
import Artist from '../database/models/artist';

export default class ArtistService {
    artistRepo() {
        return getRepository(Artist);
    }

    async findAll() {
        return await this.artistRepo().find({ relations: ['genre'] });
    }

    async findById(id) {
        const artist = await this.artistRepo().findOne(id);
        if (artist) {
            return artist;
        } else {
            throw ({ message: 'artist not found', status: 404 });
        }
    }

    async findByGenreId({ genreId }) {
        const artist = await this.artistRepo()
            .createQueryBuilder("artis")
            .where("artis.genre = :id", { id: genreId })
            .getMany();
        return artist;
    }

    save(data) {
        const artist = this.artistRepo().save(data);
        return artist;
    }

    async update(artist) {
        return await this.artistRepo().save(artist);
    }

    async delete(id) {
        const artist = await this.findById(id);
        if (artist) {
            return await this.artistRepo().delete(id);
        }
    }
}