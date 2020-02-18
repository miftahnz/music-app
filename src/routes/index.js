import User from './user.route';
import Artist from './artist.route';
import Genre from './genre.route';
import Song from './song.route';

const routes = [].concat(User, Artist, Genre, Song);

export default routes;