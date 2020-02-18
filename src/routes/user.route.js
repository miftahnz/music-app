import UserService from "../services/user.service";
import Boom from '@hapi/boom';
import Joi from '@hapi/joi';

const service = new UserService();

const User = [{
        method: 'GET',
        path: '/users',
        config: {
            // auth: 'simple',
            handler: async(request, h) => {
                return await service.findAll();
            },
        }
    },

    {
        method: 'GET',
        path: '/user/{id?}',
        handler: async(req, h) => {
            try {
                const { id } = req.params;
                const User = await service.findOne({ id });
                return User;
            } catch (e) {
                throw Boom.notFound(e.message);
            }
        }
    },
    {
        method: 'POST',
        path: '/users',
        config: {
            handler: async(req, h) => {
                const data = await service.save(req.payload);
                return h.response({
                    data
                }).code(201);
            },
            // validate: {
            //     query: Joi.object({
            //         name: Joi.required(),
            //         username: Joi.required(),
            //         password: Joi.required()
            //     })
            // }
        }
    },
    {
        method: 'DELETE',
        path: '/user/{id?}',
        handler: async(req, h) => {
            await service.delete(req.params.id);
            return h.response().code(204);
        }
    },
    {
        method: 'PUT',
        path: '/user',
        config: {
            handler: async(req, h) => {
                const cust = req.payload;
                const data = await service.update(cust);
                return h.response({
                    data,
                });
            }
        },

    },
    // {
    //     method: 'GET',
    //     path: '/',
    //     handler: function(req, h) {
    //         return h.response(response.body);
    //     }
    // },
    // {
    //     method: 'GET',
    //     path: '/',
    //     options: {
    //         auth: {
    //             strategy: 'restricted'
    //         }
    //     },
    //     handler: function(req, h) {
    //         return h.view('restricted');
    //     }
    // },


];

export default User;