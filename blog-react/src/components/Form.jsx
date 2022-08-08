const Form = (props) => {
  return(
    <div className='newBlog'>
    <form onSubmit={props.handleSubmit}>
      <label htmlFor='topic'></label>
      <input id='topic' placeholder='topic..' onChange={props.handleChange}/>
      <label htmlFor='title'></label>
      <input id='title' placeholder='title...' onChange={props.handleChange}/>

      <div className='author'>
        <label htmlFor='author'></label>
        <input id='author' placeholder='authored by...' onChange={props.handleChange} />
      </div>
      <label htmlFor='body'></label>
      <textarea id='body' className='blog' placeholder='...2500 characters or less..' rows='50' cols='80' maxLength='2500' onChange={props.handleChange} />
      <button className='submit' type='submit'>Submit</button>
    </form>
  </div>
  )
}

export default Form