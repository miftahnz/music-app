import GenreService from '../services/genre.service';
import Boom from '@hapi/boom';

const service = new GenreService();

const Genre = [{
        method: 'GET',
        path: '/genres',
        config: {
            handler: async(req, h) => {
                //                 var cookie = req.state.session
                // console.log(cock)
                //                 if (!cookie) {
                //                     cookie = {
                //                         username: 'futurestudio',
                //                         firstVisit: false
                //                     }
                //                 }

                //                 cookie.lastVisit = Date.now()

                //                 h('Hello Future Studio').state('session', cookie)

                return await service.findAll();
            }
        }
    },
    {
        method: 'GET',
        path: '/genre/{id?}',
        config: {
            handler: async(req, h) => {
                try {
                    return await service.findById(req.params.id);
                } catch (e) {
                    throw Boom.notFound(e.message);
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/genre',
        config: {
            handler: async(req, h) => {
                return await service.save(req.payload);
            }
        }
    },
    {
        method: 'PUT',
        path: '/genre',
        config: {
            handler: async(req, h) => {
                return await service.update(req.payload);
            }
        }
    },
    {
        method: 'DELETE',
        path: '/genre/{id?}',
        config: {
            handler: async(req, h) => {
                try {
                    await service.delete(req.params.id);
                    return h.response({ message: "genre deleted." });
                } catch (e) {
                    throw Boom.notFound(e.message);
                }
            }
        }
    }

]

export default Genre;