import db from '../database';

const AccessLevel = db.Model.extend({
  tableName: 'access_level'
});

export default AccessLevel;
