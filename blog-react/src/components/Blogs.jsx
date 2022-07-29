import { useNavigate } from 'react-router-dom'

const Blogs = (props) => {

let navigate = useNavigate()
const newBlogs = props.newBlogs


const showBlog = (blog) => {
  navigate(`${blog._id}`)
}




  return(
<div className='blogComp'>
<h1>Blogs</h1>
<h3>Select blog to view</h3>

  {newBlogs.map((blog) => (
    <div onClick={() => showBlog(blog)} key={blog._id}>
    <h2>{blog.title}</h2>
    <h3>authored by:{blog.author}</h3>
    </div>
  ))}

</div>
  )
}

export default Blogs