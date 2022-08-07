const Blog = require('../models/blog')
const Topic = require('../models/topic')

// Blog queries
const createBlog = async (req, res) => {
  try {
    const blog = await new Blog(req.body)
    await blog.save()
    return res.status(201).json({
      blog
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const readAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find()
    return res.status(201).json({
      blogs
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const readBlog = async (req, res) => {
  try {
    const blogs = await Blog.findById()
    return res.status(201).json({
      blogs
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateBlog = async (req, res) => {
  try {
    const update = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.status(200).json(update)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Blog.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Blog deleted')
    }
    throw new Error('Blog not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// Topic queries

// const createTopic = async (req, res) => {
//   try {
//     const topic = await new Topic(req.body)
//     await topic.save()
//     return res.status(201).json({
//       topic
//     })
//   } catch (error) {
//     return res.status(500).json({ error: error.message })
//   }
// }

// const readAllTopics = async (req, res) => {
//   try {
//     const topics = await Topic.find()
//     return res.status(201).json({
//       topics
//     })
//   } catch (error) {
//     return res.status(500).json({ error: error.message })
//   }
// }

module.exports = {
  createBlog,
  // createTopic,
  readBlog,
  readAllBlogs,
  // readAllTopics,
  updateBlog,
  deleteBlog
}
