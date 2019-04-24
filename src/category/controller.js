import Category from './model';
import PropHelper from '../prop-helper';

const expectedProps = [ 'name', 'owner' ];

export default {

  // CREATE

  create(request, h) {
    let payload = request.payload;
    let props = PropHelper.addProps(payload, expectedProps);

    return Category
      .forge(props)
      .save()
      .then(category => category.toJSON())
      .catch(err => {
        console.error(err);
      });
  },

  // READ

  get(request, h) {

    let id = encodeURIComponent(request.params.id);

    return Category
      .where('id', id)
      .fetch()
      .then(category => category.toJSON())
      .catch(err => {
        console.error(err);
      });
  },

  getAll(request, h) {

    return Category
      .fetchAll()
      .then(category => category.toJSON())
      .catch(err => {
        console.error(err);
      });
  },

  // UPDATE

  update(request, h) {

    let payload = request.payload;
    let id = encodeURIComponent(request.params.id);
    let props = PropHelper.addProps(payload, expectedProps);
    return Category
      .forge({ id: id })
      .save(props, { method: 'update' })
      .then((category) => {
        return Category
          .where('id', category.id)
          .fetch()
          .then(category => category.toJSON())
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

    return Category
      .where('id', id)
      .destroy()
      .then(category => category.toJSON())
      .catch(err => {
        console.error(err);
      });
  }

}
