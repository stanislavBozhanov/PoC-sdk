const sequelize = require('sequelize');
const db = require('../models/index');
const uuid = require('uuid');


exports.question_get = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    message: 'Instance changed'
  }));
};


exports.question_post = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    message: 'Instance changed'
  }));
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
