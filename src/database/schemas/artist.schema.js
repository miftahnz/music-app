import { EntitySchema } from 'typeorm';
import Artist from '../models/artist';

const ArtistSchema = new EntitySchema({
    name: 'Artist',
    target: Artist,
    tableName: 'artists',
    columns: {
        id: {
            type: 'int',
            generated: true,
            primary: true,
            generationStrategy: "increment",
        },
        name: {
            type: 'varchar',
            length: 100,
        },
        photo: {
            type: 'varchar',
            length: 255,
            nullable: false,
        }
    },
    relations: {
        genre: {
            target: 'Genre',
            type: 'many-to-one',
            joinColumn: true,
        },
        artists: {
            target: 'Song',
            type: 'one-to-many',
            inverseSide: 'artist',
            cascade: true,
            joinColumn: true,
        }
    }
})

export default ArtistSchema;