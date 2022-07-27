import { Link } from 'react-router-dom'

const Blog = () => {
  return(
<div class='blogComp'>
  <nav class='blogNav'>
    <Link class='blogNavLink' to='/topics'>Topics</Link>
    <Link class='blogNavLink back' to='/'>Back</Link>
  </nav>
  

</div>
  )
}

export default Blog