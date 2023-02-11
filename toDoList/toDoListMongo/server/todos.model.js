const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodosSchema = Schema({
    text: {
        type: String,
        required: true,
    },
    checked: {
        type: Boolean,
        default: false,
    }
},{ versionKey: false});

const TodoModel = mongoose.model('Todos',TodosSchema);
module.exports = TodoModel;