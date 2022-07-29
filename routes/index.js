const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

//blog

router.post('/blogs', controllers.createBlog)

router.get('/blogs', controllers.readAllBlogs)

router.get('/blogs/:_id', controllers.readBlog)

//topic

router.post('/topics', controllers.createTopic)

router.get('/topics', controllers.readAllTopics)

module.exports = router
