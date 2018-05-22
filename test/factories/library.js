// const faker = require('faker');
// const uuid = require('uuid');
// const db = require('../../models/index');
// /**
//  * Generate an object which container attributes needed
//  * to successfully create a library instance.
//  *
//  * @param  {Object} props Properties to use for the user.
//  *
//  * @return {Object}       An object to build the user from.
//  */
// const data = async (props = {}) => {
//   const defaultProps = {
//     uuid: faker.random.uuid,
//     name: faker.name.title(),
//   };
//   return Object.assign({}, defaultProps, props);
// };
//
// module.exports = async (props = {}) => db.Library.create(await data(props));
