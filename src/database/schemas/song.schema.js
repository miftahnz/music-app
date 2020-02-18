import { EntitySchema } from 'typeorm';
import Song from '../models/song';

const SongSchema = new EntitySchema({
    name: 'Song',
    target: Song,
    tableName: 'songs',
    columns: {
        id: {
            type: 'int',
            generated: true,
            primary: true,
        },
        title: {
            type: 'varchar',
            length: 100,
            nullable: false,
        },
        duration: {
            type: 'time',
            nullable: false,
        }
    },
    relations: {
        artist: {
            target: 'Artist',
            type: 'many-to-one',
            joinColumn: true,
        }
    }
})
export default SongSchema;