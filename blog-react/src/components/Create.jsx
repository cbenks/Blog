import Form from './Form'
import { useState } from 'react'
import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api'

const Create = (props) => {


  return(
    <div className='create'>
      <header>
        <h1> Whats on your mind?</h1>
      </header>
      <div>
        <Form handleChange={props.handleChange} handleSubmit={props.handleSubmit} formState={props.formState}/>
      </div>
    </div>
  )
}

export default Create