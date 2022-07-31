import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from './pages/Nav'
import Blogs from './components/Blogs'
import Topics from './components/Topics'
import Create from './components/Create'
import Blog from './components/Blog'

const BASE_URL = 'http://localhost:3001/api'

function App() {
  const initialState = {
    topic: '',
    title: '',
    body: '',
    author: ''
  }

  const [formState, setFormState] = useState({
    topic: '',
    title: '',
    body: '',
    author: ''
  })

  const [newBlogs, setNewBlogs] = useState([])

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post(`${BASE_URL}/blogs`, formState)
    setFormState(initialState)
  }

  useEffect(() => {
    const displayBlog = async () => {
      try {
        let res = await axios.get(`${BASE_URL}/blogs`)
        setNewBlogs(res.data.blogs)
        console.log(res.data.blogs)
      } catch (err) {
        console.log(err.response.data)
      }
    }
    displayBlog()
  }, [])

  return (
    <div className="App">
      <header className="appHead">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/blogs" element={<Blogs newBlogs={newBlogs} />} />
          <Route path="/topics" element={<Topics />} />
          <Route
            path="/create"
            element={
              <Create
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formState={formState}
                initialState={initialState}
              />
            }
          />
          <Route path="/blogs/:id" element={<Blog newBlogs={newBlogs} />} />
        </Routes>
      </main>
      <div></div>
    </div>
  )
}

export default App
