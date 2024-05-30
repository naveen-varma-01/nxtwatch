import {Link} from 'react-router-dom'

import {List} from '../Home/StyledComponents'

const Sidebar = () => {
  return (
    <ul>
      <Link to="/">
        <List>Home</List>
      </Link>
      <Link to="/trending">
        <List>Trending</List>
      </Link>
      <Link to="/gaming">
        <List>Gaming</List>
      </Link>
      <Link to="/saved-videos">
        <List>Saved videos</List>
      </Link>
    </ul>
  )
}
export default Sidebar
