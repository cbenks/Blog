import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Home from './pages/Home'
import Nav from './pages/Nav'
import Blog from './components/Blog'
import Topics from './components/Topics'
import Create from './components/Create'

const BASE_URL = 'http://localhost:3001/api'

function App() {
  let [newBlog, setNewBlog] = useState({
    topic: '',
    title: '',
    body: '',
    author: ''
  })

  const handleChange = (event) => {
    let blogPost = {
      ...newBlog,
      [event.currentTarget.id]: event.currentTarget.value
    }
    setNewBlog(blogPost)
    console.log(event.target.value)
  }

  const handleSubmit = async (event) => {
    try {
      let res = await axios.post(`${BASE_URL}/blogs`, newBlog)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <header class="appHead">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/Blog" element={<Blog />} />
          <Route
            path="/create"
            element={
              <Create handleChange={handleChange} handleSubmit={handleSubmit} />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
