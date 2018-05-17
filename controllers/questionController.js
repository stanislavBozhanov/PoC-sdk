const sequelize = require('sequelize');
const db = require('../models/index');
const uuid = require('uuid');


exports.question_get = function (req, res) {
  db.Library.findAll()
    .then(function (libraries) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({
        libraries: libraries,
      }));
    }).catch(function (e) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
      error: e,
    }));
  });
};


exports.question_post = function (req, res) {
  db.Library.create({
    uuid: uuid.v4(),
    name: 'pesho'
  }).then(function () {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
      message: 'Instance created'
    }));
  }).catch(function (e) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
      error: e
    }));
  });
};

exports.question_put = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    message: 'Instance changed'
  }));
};

exports.question_delete = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    message: 'Instance deleted'
  }));
};
