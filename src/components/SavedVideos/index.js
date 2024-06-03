import {CgPlayListAdd} from 'react-icons/cg'

import Headers from '../Headers'
import NavigationBar from '../NavBar'
import VideoAndThemeContext from '../../context/VideoAndThemeContext'

import SavedVideosView from '../SavedVideosView'
import {
  SavedCont,
  SavedTitleIconCont,
  SavedVideoTitle,
  SavedVideoList,
  SavedVideoText,
  NoSavedvideo,
  NoSavedVideoImg,
  NosavedVideoHeading,
  NoSavedVideoNote,
} from './styledComponents'

const SavedVideos = () => (
  <VideoAndThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      return (
        <>
          <Headers />
          <NavigationBar />
          <SavedCont data-testid='savedVideos' bgColor={bgColor}>
            <SavedVideoTitle>
              <SavedTitleIconCont>
                <CgPlayListAdd size='25' />
              </SavedTitleIconCont>
              <SavedVideoText color={textColor}>Saved Videos</SavedVideoText>
            </SavedVideoTitle>
            {savedVideos.length > 0 ? (
              <SavedVideoList>
                {savedVideos.map(each => (
                  <SavedVideosView key={each.id} videoDetails={each} />
                ))}
              </SavedVideoList>
            ) : (
              <NoSavedvideo>
                <NoSavedVideoImg
                  src='https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'
                  alt='no saved videos'
                />
                <NosavedVideoHeading headingColor={headingColor}>
                  No Saved Videos Found
                </NosavedVideoHeading>
                <NoSavedVideoNote noteColor={noteColor}>
                  You can save your videos while watching them
                </NoSavedVideoNote>
              </NoSavedvideo>
            )}
          </SavedCont>
        </>
      )
    }}
  </VideoAndThemeContext.Consumer>
)
export default SavedVideos
