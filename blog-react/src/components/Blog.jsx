import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Blog = (props) => {

  const BASE_URL = 'http://localhost:3001/api'
  const nav = useNavigate()
  let { id } = useParams()
  const [blog, setBlog] = useState({})

  useEffect(() => {
    let selectedBlog = props.newBlogs.find((blog) => blog._id === id)
    setBlog(selectedBlog)
  }, [blog])

  const deleteBlog = async (blog) => {
    try {
      let res = await axios.delete(`${BASE_URL}/blogs/${id}`);
      nav(`/blogs`)
    } catch (err) {
      console.log(err.response.data)
    }
    props.refresh()
  }

const editBlog = (blog) => {
  nav(`/blogs/:id/edit`)
}

  return (
<div className='singleBlog'>
  <Link className="back" to='/blogs'>Back</Link>
  <div className='showcaseBlogs'>
    <h1 className='singleBlogTitle'>{blog.title}</h1>
    <h3 className="singleBlogAuthor" >by:{blog.author}</h3>
    <p className='singleBlogBody'>{blog.body}</p>
    <button className="button del" onClick={() =>{if(window.confirm('Delete?')) {deleteBlog()} }}>Delete</button>
    <button className="button edit" onClick={() => editBlog()}>Edit</button>
  </div>

</div>
  )

  }
export default Blog