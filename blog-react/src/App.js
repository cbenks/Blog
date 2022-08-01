import './styles/App.css'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from './pages/Nav'
import Blogs from './components/Blogs'
import Topics from './components/Topics'
import Create from './components/Create'
import Blog from './components/Blog'
import Edit from './components/Edit'

const BASE_URL = 'http://localhost:3001/api'

function App() {
  const nav = useNavigate()
  const initialState = {
    topic: '',
    title: '',
    body: '',
    author: ''
  }

  const [newBlogs, setNewBlogs] = useState([])

  const [blog, setBlog] = useState({})

  const [formState, setFormState] = useState({
    topic: '',
    title: '',
    body: '',
    author: ''
  })

  const refresh = () => {
    window.location.reload(false)
  }

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
    nav(`/blogs`)
    refresh()
  }

  useEffect(() => {
    const displayBlog = async () => {
      try {
        let res = await axios.get(`${BASE_URL}/blogs`)
        console.log(res.data)
        setNewBlogs(res.data.blogs)
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
          <Route
            path="/blogs/:id"
            element={
              <Blog
                newBlogs={newBlogs}
                refresh={refresh}
                blog={blog}
                setBlog={setBlog}
              />
            }
          />
          <Route
            path="/blogs/:id/edit"
            element={<Edit blog={blog} setBlog={setBlog} refresh={refresh} />}
          />
        </Routes>
      </main>
      <div></div>
    </div>
  )
}

export default App
