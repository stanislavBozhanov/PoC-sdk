// process.env.NODE_ENV = 'test';
//
// var db = require('../models/index');
// var app = require('../app');
//
// var chai = require('chai');
// var chaiHttp = require('chai-http');
// var should = chai.should();
// var libraryFactory = require('./factories/library');
//
// chai.use(chaiHttp);
//
// describe('Libraries', () => {
//   beforeEach((done) => {
//     db.Library.destroy({
//       where: {},
//       truncate: true
//     }).then(() => libraryFactory())
//       .then(() => done());
//   });
//
//   describe('/GET library', () => {
//     it('it should GET all the libraries', (done) => {
//       chai.request(app)
//         .get('/libraries')
//         .end(function(err, res) {
//           res.should.have.status(200);
//           done();
//         });
//     })
//   });
//
//




});
