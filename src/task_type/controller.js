import TaskType from './model';
import PropHelper from '../prop-helper';

export default {

  // READ

  get(request, h) {

    let id = encodeURIComponent(request.params.id);

    return TaskType
      .where('id', id)
      .fetch()
      .then(taskType => taskType.toJSON())
      .catch(err => {
        console.error(err);
      });
  },

  getAll(request, h) {

    return TaskType
      .forge()
      .orderBy('order', 'ASC')
      .fetchAll()
      .then(taskType => taskType.toJSON())
      .catch(err => {
        console.error(err);
      });
  },

}
