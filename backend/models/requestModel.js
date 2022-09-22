const mongooose = require('mongoose')

const Schema = mongooose.Schema

const requestSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    request: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongooose.model('Requests', requestSchema)