import { EntitySchema } from 'typeorm';
import Genre from '../models/genre';

const GenreSchema = new EntitySchema({
    name: 'Genre',
    target: Genre,
    tableName: 'genres',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        genre: {
            type: 'varchar',
            nullable: false,
            length: 100,
        },
        images: {
            type: 'varchar',
            nullable: false,
            length: 255,
        }
    },
    relations: {
        artists: {
            target: 'Artist',
            type: 'one-to-many',
            inverseSide: 'genre',
            joinColumn: true,
            cascade: true,
        }
    }
})
export default GenreSchema;