import TaskController from './task/controller';
// import UserController from './user/controller';
// import AccessController from './access-level/controller';

const ApiRoutes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Hello, world!';
    }
  },

  // TASKS
  {
    method: 'POST',
    path: '/task',
    handler: TaskController.create
  },
  {
    method: 'GET',
    path: '/tasks',
    handler: TaskController.getAll
  },
  {
    method: 'GET',
    path: '/task/{id}',
    handler: TaskController.get
  },
  {
    method: 'PATCH',
    path: '/task/{id}',
    handler: TaskController.update
  },
  {
    method: 'DELETE',
    path: '/task/{id}',
    handler: TaskController.delete
  }

  
];

export default ApiRoutes;
