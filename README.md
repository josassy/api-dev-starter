# Blisters API

API designed for use with blisters-client. Created using Node/JavaScript that features the following:

- [Hapi.js](https://hapijs.com/) for middleware with a few sample routes configured for an api
- [Bookshelf.js](https://bookshelfjs.org/) for interacting with either a Postgres or MySQL (default) database along with a few sample models and controllers as a part of the api.
- [Babel.js](https://babeljs.io/) configured to allow you to work in ES6+.
- Live reload with [Nodemon](https://nodemon.io/).

## Getting Started

1. Download the repo and edit the personal details in the `package.json` to your liking.
2. Install the dependencies for the project by running this command from terminal within the root folder:

  ```bash
  npm install
  ```

3. Duplicate the `.env.sample` file and rename it to `.env`. Then provide  connection details for your database. This file *should not* be tracked using version control so that your credentials remain private. Do, however, keep the necessary variables synchronized in the sample file so all necessary setup can be matched when running the application in other environments. See "Database Development" below for more information about the initial database setup and maintenance if you're new to databases.

4. Start the application for development with the following command:

  ```bash
  npm start
  ```

  This spins up the api from port `8081` (or whichever port you've set up through your `.env` file) with `nodemon` watching for changes in `src/`.

5. Customize and build your own application! See "Customizing the Setup" below

## Database development

If you're new to databases, consider installing [MAMP](https://www.mamp.info/) for an easy-to-run installation of MySQL and the versatile [PHPMyAdmin](https://www.phpmyadmin.net/).

## Running migrations

Once Knex and Bookshelf are setup properly, and the database is working, run the included migrations to your database:
```bash
knex migrate:latest
```

## Customizing the Setup

In order to jump in and start customizing the application boilerplate a quick overview of the files in the `src` folder may be helpful:

- `config.js` contains a mapping of settings for the `knex` database connection. These primarily come from the `.env` environment file but contain a few other settings you can customize further. See the Bookshelf and Knex documentation. This file is imported elsewhere so it can be used as a centralized house for configurations throughout the application.
- `database.js` contains settings and instantiation of the Bookshelf and Knex database objects. It should not need any customization other than perhaps adjusting plugins being used for your Bookshelf setup. This is included throughout the application wherever the Bookshelf library is needed.
- `server.js` is the core server setup for the Hapi middleware that runs the api. Here we provide some initial server configurations including the port on which the api runs and some CORS settings. Adjust these as needed.
- `routes` is used where we set up the various endpoints for the api using the Hapi route configuration object. For each endpoint identify the path, the method, and a handler function. Typically, the handlers should be tied closely to a controller method for a particular database entity. For example, in the starter set, we've imported the `UserController` and used its `get` and `getAuth` methods as handlers for the `/user/{id}` and `/login` endpoints, respectively. Add or modify routes as needed.
- model folders such as `access-level` and `user` contain at least a `model.js` and usually also a `controller.js`.
  - `model.js` -- this contains the Bookshelf object setup for a given entity.
  - `controller.js` -- This contains logic for interacting with the database in meaningful ways and provides methods that can be used as handlers for route endpoints. It is only needed to facilitate such interactions and may be omitted when these are not needed, as in the case of the `user/password/` entity.

Have fun!
