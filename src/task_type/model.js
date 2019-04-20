import db from '../database';

const TaskType = db.Model.extend({
  tableName: 'task_type'
});

export default TaskType;
