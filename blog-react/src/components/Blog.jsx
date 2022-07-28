import { useEffect } from 'react'

const Blog = (props) => {


const newBlogs = props.newBlogs


  


  return(
<div className='blogComp'>
{newBlogs.map((blog) => (
<div >
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