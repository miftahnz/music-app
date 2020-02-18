import { getRepository } from 'typeorm';
import Song from '../database/models/song';

export default class SongService {
    songRepo() {
        return getRepository(Song);
    }

    async findAll() {
        return await this.songRepo().find({ relations: ['artist'] });
    }

    async findById(id) {
        const song = await this.songRepo().findOne(id);
        if (song) {
            return song;
        } else {
            throw ({ message: `song with id ${id} not found` });
        }
    }

    async findByArtistId({ artistId }) {
        const song = await this.songRepo()
            .createQueryBuilder("music")
            .where("music.artist = :id", { id: artistId })
            .getMany();
        return song;
    }

    save(data) {
        return this.songRepo().save(data);
    }

    update(data) {
        return this.songRepo().save(data);
    }

    async delete(id) {
        const song = await this.findById(id);
        return this.songRepo().delete(song.id);
    }
}