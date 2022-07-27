const Form = (props) => {
  return(
    <div className='newBlog'>
    <form onSubmit={props.handleSubmit}>
      <label htmlFor='topic'>Topic:</label>
      <input id='topic' placeholder='topic..' onChange={props.handleChange}/>
      <label htmlFor='title'>Title:</label>
      <input id='title' placeholder='title...' onChange={props.handleChange}/>

      <div className='author'>
        <label htmlFor='author'>Author:</label>
        <input id='author' placeholder='authored by...' onChange={props.handleChange}/>
      </div>
      <label htmlFor='blog'></label>
      <textarea id='blog' className='blog' placeholder='...2500 characters or less..' rows='50' cols='80' maxLength='2500' onChange={props.handleChange}/>
      <button type='submit'>Submit</button>
    </form>
  </div>
  )
}

export default Form