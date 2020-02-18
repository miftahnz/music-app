import ArtistService from '../services/artist.service';
import Boom from '@hapi/boom';

const service = new ArtistService();

const Artist = [{
        method: 'GET',
        path: '/artists',
        config: {
            // auth: 'simple',
            handler: async(request, h) => {
                const artists = await service.findAll();
                return h.response(artists);
            }
        },
    },
    {
        method: 'GET',
        path: '/artist/{id?}',
        config: {
            handler: async(request, h) => {
                try {
                    const { id } = request.params;
                    return await service.findById(id);
                } catch (e) {
                    throw Boom.notFound(e.message);
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/artist/genre/{genreId?}',
        config: {
            handler: async(request, h) => {
                try {
                    const { genreId } = request.params;
                    return await service.findByGenreId({ genreId });
                } catch (e) {
                    throw Boom.notFound(e.message);
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/artist',
        config: {
            handler: async(request, h) => {
                try {
                    return await service.save(request.payload);
                } catch (e) {
                    throw Boom.badRequest(e.message);
                }
            }
        }
    },
    {
        method: 'PUT',
        path: '/artist/{id?}',
        config: {
            handler: async(req, h) => {
                try {
                    return await service.update(req.payload);
                } catch (e) {
                    throw Boom.badData;
                }
            }
        }
    },
    {
        method: 'DELETE',
        path: '/artist/{id?}',
        config: {
            handler: async(req, h) => {
                try {
                    await service.delete(req.params.id);
                    return h.response({ message: "artist deleted." });
                } catch (e) {
                    throw Boom.notFound(e.message);
                }
            }
        }
    }
]

export default Artist;