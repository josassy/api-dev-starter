import db from '../database';

const User = db.Model.extend({
  tableName: 'users'
});

export default User;
