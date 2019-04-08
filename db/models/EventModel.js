const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  userId: String,
  title: String,
  description: String,
  time: Date,
  notification: Boolean
});

const EventModel = mongoose.model('Event', eventSchema);

module.exports = EventModel;
