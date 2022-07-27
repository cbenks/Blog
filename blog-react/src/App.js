import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Home from './pages/Home'
import Nav from './pages/Nav'
import Blog from './components/Blog'
import Topics from './components/Topics'
import Create from './components/Create'
import Form from './components/Form'

const BASE_URL = 'http://localhost:3001/api'

function App() {
  // const [blog, setBlog] = useState('')

  const initialState = {
    topic: '',
    title: '',
    body: '',
    author: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post(`${BASE_URL}/blogs`, formState)
    } catch (err) {
      console.log(err)
    }
    setFormState(initialState)
  }

  useEffect(() => {
    const getBlogs = async () => {
      try {
        let res = await axios.get(`${BASE_URL}/blogs`)
        console.log(res.data)
        // setBlog(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getBlogs()
  }, [])
  console.log(formState)

  return (
    <div className="App">
      <header className="appHead">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/blog" element={<Blog formState={formState} />} />
          <Route path="/create" element={<Create />} />
          <Route
            path="/form"
            element={
              <Form handleChange={handleChange} handleSubmit={handleSubmit} />
            }
          />
        </Routes>
      </main>
      <div>
        <h1>{formState.title}</h1>
      </div>
    </div>
  )
}

export default App
