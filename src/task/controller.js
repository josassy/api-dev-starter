import Task from './model';
import PropHelper from '../prop-helper';

const expectedProps = [ 'owner', 'description', 'dueDate', 'category', 'taskType', 'status' ];

export default {

  // CREATE

  create(request, h) {
    let payload = request.payload;
    let props = PropHelper.addProps(payload, expectedProps);

    // TODO: Add default values
    return Task
      .forge(props)
      .save()
      .then(task => task.toJSON())
      .catch(err => {
        console.error(err);
      });
  },

  // READ

  get(request, h) {

    let id = encodeURIComponent(request.params.id);

    return Task
      .where('id', id)
      .fetch({ withRelated: ['taskType', 'category']})
      .then(task => task.toJSON())
      .catch(err => {
        console.error(err);
      });
  },

  getAll(request, h) {

    let q = request.query;

    if (!q.filterIncomplete) {
      q.filterIncomplete = false;
    }

    return Task
      .where(
        (qb) => {
          if (JSON.parse(q.filterIncomplete)) {
            qb.where({status: !q.filterIncomplete});
          }
      })
      .orderBy('dueDate', 'ASC')
      .fetchAll({ withRelated: ['taskType', 'category']})
      .then(tasks => tasks.toJSON())
      .catch(err => {
        console.error(err);
      });
  },

  // UPDATE
  update(request, h) {
    let payload = request.payload;
    let id = encodeURIComponent(request.params.id);
    let props = PropHelper.addProps(payload, expectedProps);
    return Task
      .forge({ id: id })
      .save(props, { method: 'update' })
      .then((task) => {
        return Task
          .where('id', task.id)
          .fetch({ withRelated: ['taskType', 'category']})
          .then(task => task.toJSON())
          .catch(err => {
            console.error(err);
          });
      })
      .catch(err => {
        console.error(err);
      });
  },

  // DELETE
  delete(request, h) {

    let id = encodeURIComponent(request.params.id);

    return Task
      .where('id', id)
      .destroy()
      .then(task => task.toJSON())
      .catch(err => {
        console.error(err);
      });
  }
}
