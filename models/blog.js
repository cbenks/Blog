const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Blog = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: String, required: true },
    topic: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('blogs', Blog)
