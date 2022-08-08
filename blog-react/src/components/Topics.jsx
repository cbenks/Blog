import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
const Topics = () => {

  const BASE_URL = 'http://localhost:3001/api'

  const [topics, setTopics] = useState([''])

  const getTopics = async () => {
    try {
      let res = await axios.get(`${BASE_URL}/topics`)
      console.log(res.data)
      setTopics(res.data)
    } catch (err) {
      console.log(err.response.data.topics)
    }
  }
  // getTopics()





  return(
    <div>
          <h1>Topics</h1> 
      <div>
        {topics.map((topic) => (
          <h3>{topic.category}</h3>
        ))}
      </div>
    </div>
  )
}

export default Topics