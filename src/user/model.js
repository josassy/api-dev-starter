import db from '../database';

import AccessLevel from '../access-level/model';
import UserPassword from './password/model';

const User = db.Model.extend({
    tableName: 'user',
    accessLevel: function() {
      return this.hasOne(AccessLevel, 'id', 'accessLevelId');
    },
    password: function() {
      return this.hasOne(UserPassword, 'userId', 'id');
    }
});

export default User;
