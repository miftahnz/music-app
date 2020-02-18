import { EntitySchema } from 'typeorm';
import User from '../models/User';

const UserSchema = new EntitySchema({
    name: 'User',
    target: User,
    tableName: 'users',
    columns: {
        id: {
            type: 'int',
            generated: true,
            nullable: false,
            primary: true,
        },
        handphone: {
            type: 'varchar',
            length: 100,
            nullable: false,
        },
        username: {
            type: 'varchar',
            length: 100,
            nullable: false,
        },
        password: {
            type: 'varchar',
            length: 255,
            nullable: false,
        }
    },
})

export default UserSchema;