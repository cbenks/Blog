const db = require('../db')
const Topic = require('../models/topic')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const topics = [{ category: 'Web3' }, { category: 'Recent Events' }]

  await Topic.insertMany(topics)
  console.log('Created some topics!')
}

const run = async () => {
  await main()
  db.close()
}

run()
