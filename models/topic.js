const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Topic = new Schema(
  {
    category: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('topics', Topic)
