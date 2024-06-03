import {
  FailureViewCont,
  FailedImg,
  FailuredHeading,
  FailedNote,
  RetryButton,
} from './styledComponents'

import VideoAndThemeContext from '../../context/VideoAndThemeContext'

const FailureView = props => {
  const {onRetry} = props
  const OnClickRetry = () => {
    onRetry()
  }

  return (
    <VideoAndThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingcolor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
        const failureImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureViewCont>
            <FailedImg src={failureImgUrl} alt="failure view" />
            <FailuredHeading headingcolor={headingcolor}>
              Oops! Something Went Wrong
            </FailuredHeading>
            <FailedNote noteColor={noteColor}>
              We are having some trouble to compleate your request.
              <br />
              please try agin later
            </FailedNote>
            <RetryButton type="button" onClick={OnClickRetry}>
              Retry
            </RetryButton>
          </FailureViewCont>
        )
      }}
    </VideoAndThemeContext.Consumer>
  )
}
export default FailureView
