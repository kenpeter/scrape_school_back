// get routes
const schoolRoute = require('./schoolRoute');

// module exports func
module.exports = function(app, db) {
  // call the routes
  productRoute(app, db);
  // Other route groups could go here, in the future
};
