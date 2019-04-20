import db from '../database';
import User from '../user/model';
import Category from '../category/model';
import TaskType from '../task_type/model';

const Task = db.Model.extend({
  tableName: 'task',
  user: () => this.hasOne(User, 'id', 'owner'),
  // category: () => this.hasOne(Category, 'id', 'category'),
  // taskType: () => this.hasOne(TaskType, 'id', 'taskType')
  category: function() {
    return this.hasOne(Category, 'id', 'category');
  },
  taskType: function() {
    return this.hasOne(TaskType, 'id', 'taskType');
  }
});

export default Task;
