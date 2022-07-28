import Form from './Form'
import { useState } from 'react'
import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api'

const Create = (props) => {


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
 


  // try {
  //   await axios.post(`${BASE_URL}/blogs`, formState)
  // } catch (err) {
  //   console.log(err)
  // }


  return(
    <div className='create'>
      <header>
        <h1> Whats on your mind?</h1>
      </header>
      <div>
        <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default Create