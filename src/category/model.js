import db from '../database';

const Category = db.Model.extend({
  tableName: 'category'
})

export default Category;
