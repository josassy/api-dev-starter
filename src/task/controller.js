import Task from './model';

export default {

  // CREATE

  create(request, h) {
    var payload = request.payload;
    // TODO: Add default values
    return Task.forge ({
      owner: payload.owner,
      description: payload.description,
      dueDate: payload.dueDate,
      category: payload.category,
      taskType: payload.taskType,
      status: payload.status
    }).save()
    .then(task => task.toJSON())
    .catch(err => {
      console.error(err);
    });
  },

  // READ

  get(request, h) {
    return Task
      .where('id', encodeURIComponent(request.params.id))
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
      .forge()
      .where((qb) => {
        if (JSON.parse(q.filterIncomplete)) {
          qb.where({status: !q.filterIncomplete});
        }
      })
      .orderBy('dueDate', 'ASC')
      .fetchAll({ withRelated: ['taskType', 'category']})
      // .then(tasks => {
      //   if (q.filterIncomplete) {
      //     tasks = tasks.where('status', false);
      //   }
      //   if (q.filterCategory) {
      //     tasks = tasks.where('category.name', q.filterCategory);
      //   }
      //   return tasks.toJSON();
      // })
      .then(tasks => tasks.toJSON())
      .catch(err => {
        console.error(err);
      });
  },

  // UPDATE
  update(request, h) {
    var payload = request.payload
    return Task.forge({ id: request.params.id })
      .save({
        owner: payload.owner,
        description: payload.description,
        dueDate: payload.dueDate,
        category: payload.category,
        taskType: payload.taskType,
        status: payload.status,
      },
      { method: 'update' })
      .then(task => task.toJSON())
      .catch(err => {
        console.error(err);
      });
  },

  // DELETE
  delete(request, h) {
    return Task
      .where('id', encodeURIComponent(request.params.id))
      .destroy()
      .then(task => task.toJSON())
      .catch(err => {
        console.error(err);
      });
  }
}
