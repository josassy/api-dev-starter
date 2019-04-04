import UserController from './user/controller';
import AccessController from './access-level/controller';

const ApiRoutes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Hello, world!';
    }
  },
  {
    method: 'POST',
    path: '/login',
    handler: UserController.getAuth
  },
  {
    method: 'GET',
    path: '/user/{id}',
    handler: UserController.get
  },
  {
    method: 'GET',
    path: '/access-level/{id}',
    handler: AccessController.get
  }
];

export default ApiRoutes;
