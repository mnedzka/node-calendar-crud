const PORT = process.env.PORT || 5000;
const DB_HOST = process.env.DB_HOST;
const SESSION_OPTIONS = {
  secret: 'tajny szyfr enigmy',
  resave: false,
  saveUninitialized: true
};

module.exports = {
  PORT,
  SESSION_OPTIONS,
  DB_HOST
};
