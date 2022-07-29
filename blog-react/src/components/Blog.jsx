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

  useEffect(() => {
    const deleteBlog = () => {
    
    }
  }, [])
  
  return (
<div className='singleBlog'>
  <Link class="back" to='/blogs'>Back</Link>
  <div className='showcaseBlogs'>
    <h1 className='singleBlogTitle'>{blog.title}</h1>
    <h3>by:{blog.author}</h3>
    <p className='singleBlogBody'>{blog.body}</p>
    <button className="button del">Delete</button>
    <button className="button edit">Edit</button>
  </div>

</div>
  )
}

export default Blog