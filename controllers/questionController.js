// Import the Question model


exports.question_get = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    uuid: 45246356564,
    libraryUuid: 4545245425234
  }));
};

exports.question_post = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    message: 'Instance created'
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
