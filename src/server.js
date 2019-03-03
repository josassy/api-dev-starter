import Hapi from 'hapi';
import config from './config';
import ApiRoutes from './routes.js';

// Basic server setup
const server = Hapi.server(config.hapi);

// Provide routes
server.route(ApiRoutes);

// Define server initialization
const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

// Error handling
process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

// Start server
init();
