import User from './model';
import UserPassword from './password/model';

export default {
  get(request, h) {
    return User
      .where('id', encodeURIComponent(request.params.id))
      .fetch({ withRelated: ['accessLevel'] })
      .then(user => user.toJSON())
      .catch(err => {
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
      .then((user) => {
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
      .catch(err => {
        console.error(err);
      });
  }
};
