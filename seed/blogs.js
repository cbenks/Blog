const db = require('../db')
const Blog = require('../models/blog')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const blogs = [
    { title: 'test', body: 'lorem impsum', topic: 'topic test', author: 'Cory' }
  ]

  await Blog.insertMany(blogs)
  console.log('Created a blog!')
}
const run = async () => {
  await main()
  db.close()
}

run()
