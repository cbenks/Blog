import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Edit = (props) => {
  const BASE_URL = 'http://localhost:3001/api'
  let nav = useNavigate()
  let blog=props.blog
  let setBlog=props.setBlog
  
  const editHandleChange = (event) => {
    setBlog({
      ...blog,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  // const editBlog = async () => {
  //   try {
  //     let res = await axios.put(`${BASE_URL}/blogs/${blog._id}`, blog)
  //   } catch(err) {
  //     console.log(err.response.data)
  //   }
  // }
  
  return <div>

    <form className="edit" onSubmit>
      <label htmlFor='topic'>Topic:</label>
      <input id='topic' placeholder='topic..' onChange={editHandleChange} value={blog.topic}/>
      <label htmlFor='title'>Title:</label>
      <input id='title' placeholder='title...' onChange={editHandleChange}/>

      <div className='author'>
        <label htmlFor='author'>Author:</label>
        <input id='author' placeholder='authored by...' onChange={editHandleChange} />
      </div>
      <label htmlFor='body'></label>
      <textarea id='body' className='blog' placeholder='...2500 characters or less..' rows='50' cols='80' maxLength='2500' onChange={editHandleChange} />
      <button className='submit' type='submit'>Submit</button>
    </form>
  </div>
}

export default Edit
