import Bookshelf from 'bookshelf';
import Knex from 'knex';
import config from './config';

const knex = Knex(config.knex);
const bookshelf = Bookshelf(knex);

// Prevent cyclical dependencies when creating models
// https://github.com/tgriesser/bookshelf/wiki/Plugin:-Model-Registry
bookshelf.plugin('registry');

// Allow pagination options for db calls
// https://github.com/bookshelf/bookshelf/wiki/Plugin:-Pagination
bookshelf.plugin('pagination');

export default bookshelf;
