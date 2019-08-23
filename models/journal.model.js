const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const journalSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;