import SongService from '../services/song.services';
import Boom from '@hapi/boom';

const service = new SongService();
const Song = [{
        method: 'GET',
        path: '/songs',
        config: {
            handler: async(req, h) => {
                const songs = await service.findAll();
                return h.response({
                    songs
                })
            }
        }
    },
    {
        method: 'GET',
        path: '/song/{id?}',
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
        method: 'GET',
        path: '/song/artist/{artistId?}',
        config: {
            handler: async(req, h) => {
                try {
                    const { artistId } = req.params;
                    return await service.findByArtistId({ artistId });
                } catch (e) {
                    throw Boom.notFound(e.message);
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/song',
        config: {
            handler: async(req, h) => {
                return await service.save(req.payload);
            }
        }
    },
    {
        method: 'PUT',
        path: '/song/{id?}',
        config: {
            handler: async(req, h) => {
                return await service.update(req.payload);
            }
        }
    },
    {
        method: 'DELETE',
        path: '/song/{id?}',
        config: {
            handler: async(req, h) => {
                try {
                    await service.delete(req.params.id);
                    return h.response({ message: "song deleted." });
                } catch (e) {
                    throw Boom.notFound(e.message);
                }
            }
        }
    }
]

export default Song;