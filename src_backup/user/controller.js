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

  getPass(request, h) {
    console.log("posting all the passwords!")
    return UserPassword
      .fetchAll()
      .then(user => user.toJSON())
      .catch(err => {
        console.error(err);
      });
  },

  getAuth(request, h) {
    let username = encodeURIComponent(request.payload.username);``
    let password = encodeURIComponent(request.payload.password);

    // TODO: encrypt password as md5
    console.log("Your username: ", username);
    return UserPassword
      .where('username', username)
      .fetch()
      .then(function(user) {
        if (!user) {
          console.log("no user!")
          return false;
        }

        user = user.toJSON();

        if (user.password === password) {
          return user;
        } else {
          console.log(
            "password no matchy!\nYour password: ", password, "\nCorrect password: ", user.password
          );
          return false;
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
};
