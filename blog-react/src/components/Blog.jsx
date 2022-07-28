import { useNavigate } from 'react-router-dom'

const Blog = (props) => {

let navigate = useNavigate()
const newBlogs = props.newBlogs


const showBlog = (blog) => {
  navigate(`${blog.id}`)
}



  return(
<div className='blogComp'>
  
{newBlogs.map((blog) => (
<div onClick={() => showBlog(blog)} key={blog.id} >
  <h1>Blogs</h1>
  <h3>title:{blog.title}</h3>
  <h3>topic:{blog.topic}</h3>
  <h4>author:{blog.author}</h4>
  <p>blog:{blog.body}</p>
</div>
))}


</div>
  )
}

export default Blog