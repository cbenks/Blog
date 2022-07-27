const Create = () => {
  return(
    <div class='create'>
      <header>
        <h1> New Blog Post</h1>
      </header>
      <div></div>
      <div class='newBlog'>
        <form>
          <div id='topic'><input placeholder='topic..'></input></div>
          <div class='title'><input placeholder='title...'></input></div>
          <div class='author'><input placeholder='authored by...'></input></div>
          <textarea class='blog' placeholder='...2500 characters or less..' rows='50' cols='80' maxlength='2500' ></textarea>
          <button type='submit'>Submit</button>
          </form>
      </div>
    </div>
  )
}

export default Create