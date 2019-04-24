import TaskController from './task/controller';
import CategoryController from './category/controller';


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
  },

  // CATEGORIES
  {
    method: 'POST',
    path: '/category',
    handler: CategoryController.create
  },
  {
    method: 'GET',
    path: '/category/{id}',
    handler: CategoryController.get
  },
  {
    method: 'GET',
    path: '/categories',
    handler: CategoryController.getAll
  },
  {
    method: 'PATCH',
    path: '/category/{id}',
    handler: CategoryController.update
  },
  {
    method: 'DELETE',
    path: '/category/{id}',
    handler: CategoryController.delete
  }
];

export default ApiRoutes;
