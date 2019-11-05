const express = require('express');
const mongoose = require('mongoose');
const createError = require('http-errors');
const db = require('./config/keys').mongoURI;
//const usersRouter = require('./routes/user.route');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
.then(()=>console.log('Connected to Mongodb Cloud Cluster'))
.catch((err)=>{
  console.log(err);
  process.exit();
});
//app.use('/api/users', usersRouter);

app.use((req, res, next)=>{
  next(createError(404));
});
app.use((err, req, res, next)=>{
  res.locals.message = err.message;

  res.status(err.message || 500);
  res.send(err);
});

module.exports = app;