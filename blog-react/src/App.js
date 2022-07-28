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

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post(`${BASE_URL}/blogs`, formState)
    console.log(res)
    setFormState(initialState)
  }

  // const [blog, setBlog] = useState('')

  // useEffect(() => {
  //   const getBlogs = async () => {
  //     try {
  //       let res = await axios.get(`${BASE_URL}/blogs`)
  //       console.log(res.data)
  //       // setBlog(res.data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getBlogs()
  // }, [])

  const displayBlog = () => {}

  return (
    <div className="App">
      <header className="appHead">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/create"
            element={
              <Create
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formState={formState}
              />
            }
          />
        </Routes>
      </main>
      <div></div>
    </div>
  )
}

export default App
