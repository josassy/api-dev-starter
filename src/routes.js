import UserController from './user/controller';

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
  }
];

export default ApiRoutes;
