const sequelize = require('sequelize');
const db = require('../models/index');
const uuid = require('uuid');


exports.questionGroup_get = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    message: 'Instance changed'
  }));
};


exports.questionGroup_post = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    message: 'Instance changed'
  }));
};

exports.questionGroup_put = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    message: 'Instance changed'
  }));
};

exports.questionGroup_delete = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    message: 'Instance deleted'
  }));
};
