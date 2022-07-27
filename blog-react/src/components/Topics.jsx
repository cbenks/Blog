import { Link } from 'react-router-dom'

const Topics = () => {
  return(
    <div>
      <div>
        <h1>Topics</h1> 
        <ul>
          <li><Link to='/blog'>topic 1</Link></li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </div>
  )
}

export default Topics