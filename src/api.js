import Hapi from '@hapi/hapi';
import configure from './config';
import routes from './routes';
import createConnection from './database/connection';
import validate from './config/auth.validate';
import HapiAuthCookie from 'hapi-auth-cookie';

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

export default async() => {
    configure();
    const connection = await createConnection();
    const server = Hapi.server({
        port: process.env.APP_PORT,
        host: process.env.APP_HOST,
        routes: {
            cors: true
        }
    });

    await server.register(require('@hapi/basic'));
    await server.register(HapiAuthCookie);
    // server.auth.strategy('simple', 'basic', { validate });

    // server.state('session', {
    //     ttl: 1000 * 60 * 60 * 24, // 1 day lifetime
    //     encoding: 'base64json' // cookie data is JSON-stringified and Base64 encoded
    // })

    // server.auth.strategy('restricted', 'cookie' {
    //     password: '$2a$10$K/QIHd3e7hjeCEJ42jRdXOZjbw2kn9UvJWQNuLcUx7ZDHWElYRmPG',
    //     cookie: 'session',
    //     isSecure: false,
    //     redirectTo: '/users'
    // });
    server.route(routes);

    if (connection.isConnected) {
        await server.start();
        console.log(`DATABASE connection name ${process.env.DB_NAME}.`);
        console.log(`server`, process.env.APP_NAME, 'running on ', server.info.uri);
    }

    return server.listener;
};