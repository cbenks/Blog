import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link class="navLink" to="/">
        Home
      </Link>
      <Link class="navLink" to="/blog">
        Blog
      </Link>
      <Link class="navLaink" to="/create">
        Create
      </Link>
    </nav>
  )
}

export default Nav
