import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
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

  return (
    <div className="App">
      <header class="appHead">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
