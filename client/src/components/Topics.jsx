import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
const Topics = () => {

  const BASE_URL = 'http://localhost:3001/api'

  const [topics, setTopics] = useState([''])


  useEffect(() => {
    const getTopics = async () => {
      try {
      let res = await axios.get(`${BASE_URL}/topics`)
      console.log(res.data.topics)
      setTopics(res.data.topics)
      } catch (err) {
      console.log(err.response.data.topics)
      }
    }
    getTopics()
  }
  ,[]
)



  return(
    <div>
          <h1 className='topicsHeading'>Topics</h1> 
      <div>
        {topics.map((topic) => (
          <div className='topicsDisplay' key={topic._id} >
            <h3>{topic.category}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Topics