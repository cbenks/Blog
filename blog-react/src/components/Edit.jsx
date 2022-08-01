import axios from 'axios'

const Edit = (props) => {
  const BASE_URL = 'http://localhost:3001/api'
  let blog=props.blog
  let setBlog=props.setBlog
  
  const editHandleChange = (event) => {
    setBlog({
      ...blog,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }
  
  return <div>

    <form className="edit" onSubmit>
      <label htmlFor='topic'>Topic:</label>
      <input id='topic' placeholder='topic..' onChange={editHandleChange}/>
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
