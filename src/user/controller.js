import User from './model';
import UserPassword from './password/model';

export default {
  get(request, h) {
    return User
      .where('id', encodeURIComponent(request.params.id))
      .fetch({ withRelated: ['accessLevel'] })
      .then(function(user) {
        return user.toJSON();
      })
      .catch(function(err) {
        console.error(err);
      });
  },

  getAuth(request, h) {
    let username = encodeURIComponent(request.payload.username);
    let password = encodeURIComponent(request.payload.password);

    // TODO: encrypt password as md5

    return UserPassword
      .where('username', username)
      .fetch()
      .then(function(user) {
        if (!user) {
          return false;
        }

        user = user.toJSON();

        if (user.password === password) {
          return user;
        } else {
          return false;
        }
      })
      .catch(function(err) {
        console.error(err);
      });
  }
};
