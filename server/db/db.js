const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/AdminDashboard')
  .then(() => {
    console.log('Database Connected Successfully......');
  })
  .catch(e => {
    console.log(e);
  });

module.exports = mongoose;
