import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Blog = (props) => {

  const [blog, setBlog] = useState({})

  let { id } = useParams()
  

  useEffect(() => {
    let selectedBlog = props.newBlogs.find((blog) => blog._id === id)
    setBlog(selectedBlog)
  }, [blog])

  
  
  return (
<div>
  <Link to='/blogs'>Back</Link>
  <div className='showcaseBlogs'>
    <h1>{blog.title}</h1>
    <h3>by:{blog.author}</h3>
    <p>{blog.body}</p>
    <button>Delete</button>
  </div>

</div>
  )
}

export default Blog