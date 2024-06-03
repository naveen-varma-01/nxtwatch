import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'

import VideoAndThemeContext from '../../context/VideoAndThemeContext'

import {
  LogoLink,
  NavbarHeader,
  HeaderLogo,
  ActionContainer,
  ThemeButton,
  LogoutButton,
  PropfileImage,
  ModelCont,
  CloseButton,
  ConfirmButton,
  Modeldesc,
  ButtonsCont,
} from './styledComponents'

const Headers = props => (
  <VideoAndThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const color = isDarkTheme ? '#ffffff' : '#00306e'
      const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'

      const onchageTheme = () => {
        toggleTheme()
      }
      const onClickLogOut = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavbarHeader bgColor={bgColor}>
          <LogoLink to="/">
            <HeaderLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </LogoLink>
          <ActionContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onchageTheme}
            >
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size="24" />
              ) : (
                <BsMoon size="24" />
              )}
            </ThemeButton>
            <PropfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogoutButton type="button" bgColor={bgColor} color={color}>
                  LogOut
                </LogoutButton>
              }
            >
              {close => (
                <>
                  <ModelCont>
                    <Modeldesc>Are you sure you want to logout?</Modeldesc>
                    <ButtonsCont>
                      <CloseButton
                        type="button"
                        data-testid="CloseButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CloseButton>
                      <ConfirmButton type="button" onClick={onClickLogOut}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsCont>
                  </ModelCont>
                </>
              )}
            </Popup>
          </ActionContainer>
        </NavbarHeader>
      )
    }}
  </VideoAndThemeContext.Consumer>
)
export default withRouter(Headers)
