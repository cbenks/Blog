const Create = (props) => {
  return(
    <div class='create'>
      <header>
        <h1> New Blog Post</h1>
      </header>
      <div></div>
      <div class='newBlog'>
        <form onSubmit={props.handleSubmit}>
          <input placeholder='topic..' onChange={props.handleChange}/>
          <input placeholder='title...' onChange={props.handleChange}/>
          <div class='author'><input placeholder='authored by...' onChange={props.handleChange}/></div>
          <textarea class='blog' placeholder='...2500 characters or less..' rows='50' cols='80' maxlength='2500' onChange={props.handleChange}/>
          <button type='submit'>Submit</button>
          </form>
      </div>
    </div>
  )
}

export default Create