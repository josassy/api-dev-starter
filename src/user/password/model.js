import db from '../../database';

const UserPassword = db.Model.extend({
  tableName: 'user_TO_password'
});

export default UserPassword;
