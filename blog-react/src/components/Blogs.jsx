import { useNavigate } from 'react-router-dom'

const Blogs = (props) => {
const nav = useNavigate()
const newBlogs = props.newBlogs

const showBlog = (blog) => {
  nav(`${blog._id}`)
}

  return(
<div className='blogComp'>
<h1 className='blogsHeading' >Blogs</h1>
<h3 className='blogsHeading' >(Select blog to view)</h3>
<div >
  {newBlogs.map((blog) => (
    <div className='allBlogs' onClick={() => showBlog(blog)} key={blog._id}>
    <h2 className='allBlogsTitle'>{blog.title}</h2>
    <h3 className='allBlogsAuthor'>authored by:{blog.author}</h3>
    </div>
  ))}
</div>
</div>
  )
}

export default Blogs