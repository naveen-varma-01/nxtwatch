import Headers from '../Headers'

import NavigationBar from '../NavBar'

import VideoAndThemeContext from '../../context/VideoAndThemeContext'

import {
  NotFoundCont,
  NotFoundVideoView,
  NotFoundVideoImg,
  NotFoundVideoHeading,
  NotFoundVideoNote,
} from './styledComponents'

const NotFound = () => (
  <VideoAndThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const HeadingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      const notFoundImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Headers />
          <NavigationBar />
          <NotFoundCont bgColor={bgColor}>
            <NotFoundVideoView>
              <NotFoundVideoImg src={notFoundImgUrl} alt="not found" />
              <NotFoundVideoHeading HeadingColor={HeadingColor}>
                Page Not Found
              </NotFoundVideoHeading>
              <NotFoundVideoNote noteColor={noteColor}>
                We are Sorry ,the page you requested could not be found
              </NotFoundVideoNote>
            </NotFoundVideoView>
          </NotFoundCont>
        </>
      )
    }}
  </VideoAndThemeContext.Consumer>
)

export default NotFound
