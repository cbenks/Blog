import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Blog = (props) => {

  const [blog, setBlog] = useState('')

  let { id } = useParams()
  
  const newBlogs = newBlogs.props

  useEffect(() => {
    let selectedBlog = newBlogs.find((blog) => blog.id === parseInt(id))
    setBlog(selectedBlog)
  }, [newBlogs, id])
  
  return (
<div>
  <Link to='/blogs'>Back</Link>
  <div>
    <h1>{blog.title}</h1>
    <h3>by:{blog.author}</h3>
    <p>{blog.body}</p>
  </div>

</div>
  )
}

export default Blog