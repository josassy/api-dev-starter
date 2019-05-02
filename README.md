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

## API endpoints

### Tasks

#### POST /task

Creates a new task. Accepts following values in JSON:

##### Required
* owner : int (references valid user)
* category : int (references valid category)
* taskType : int (references valid taskType)

##### Optional
* description : string
* dueDate : date
* status : bool

**Return:** Newly created tasks in JSON

#### GET /task/{id}
Gets an existing task.


**Return:** Task in JSON

#### GET /tasks

Gets all existing tasks.

**Return:** Array of Task in JSON

#### PATCH /task/{id}

Updates an existing task. Can update any or all fields listed under POST /task.

**Return:** Edited task in JSON

#### DELETE /task/{id}

Deletes an existing task.

**Return:** Empty JSON

### Task Types

#### GET /task-type/{id}

Gets a task type by id.

**Return:** Task type in JSON

#### GET /task-types

Gets all task types.

**Return:** Array of task types in JSON

### Categories

#### POST /category

Creates a new category. Accepts following values in JSON:

##### Required
* name : string
* owner : int (references valid user)

**Return:** Newly created category in JSON

#### GET /category/{id}

Gets an existing category.

**Return:** Category in JSON

#### GET /category

Gets all existing categories.

**Return:** Array of Category in JSON

#### PATCH /category/{id}

Updates an existing category. Can update any or all fields listed under POST /task.

**Return:** Edited task in JSON

#### DELETE /task/{id}

Deletes an existing task.

**Return:** Empty JSON
