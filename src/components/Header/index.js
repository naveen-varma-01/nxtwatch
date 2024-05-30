import {Link, withRouter} from 'react-router-dom'

import {Icon, LogoutButton, NavContainer} from '../Home/StyledComponents'

import Cookies from 'js-cookie'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <NavContainer>
      <div>
        <Link to="/">
          <Icon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
        </Link>
      </div>
      <div>
        <Icon
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
      </div>
      <div>
        <LogoutButton type="button" onClick={onClickLogout}>
          Logout
        </LogoutButton>
      </div>
    </NavContainer>
  )
}
export default withRouter(Header)
