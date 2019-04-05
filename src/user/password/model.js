import db from '../../database';

const UserPassword = db.Model.extend({
  tableName: 'user_to_password'
});

export default UserPassword;
