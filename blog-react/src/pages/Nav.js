import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link className="navLink" to="/blogs">
        Blogs
      </Link>
      <Link className="navLink" to="/topics">
        Topics
      </Link>
      <Link className="navLaink" to="/create">
        Create
      </Link>
    </nav>
  )
}

export default Nav
