import {Link} from 'react-router-dom'

import {
  NoVideoView,
  NoVideoImg,
  NoVideoheading,
  NoVideoNote,
  RetryButton,
  VideoCardList,
  ListItem,
  ThumbnailImg,
  VideoDetailsCont,
  ProfileImg,
  ContentContainer,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponents'
import VideoAndThemeContext from '../../context/VideoAndThemeContext'

const HomeVideos = props => {
  const {homevideos, onRetry} = props
  const videosCount = homevideos.length

  const onClickRetry = () => {
    onRetry()
  }
  return (
    <VideoAndThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return videosCount > 0 ? (
          <VideoCardList>
            {homevideos.map(each => (
              <Link to={`/videos/${each.id}`} key={each.id}>
                <ListItem>
                  <ThumbnailImg src={each.thumbnailUrl} alt="video thumbnail" />
                  <VideoDetailsCont>
                    <ProfileImg src={each.profileImageUrl} alt="channel logo" />
                    <ContentContainer>
                      <Title color={textColor}>{each.title}</Title>
                      <ChannelName color={textColor}>{each.name}</ChannelName>
                      <ViewsAndDate color={textColor}>
                        {each.viewCount} views <Dot>&#8226;</Dot>{' '}
                        {each.publishedAt}
                      </ViewsAndDate>
                    </ContentContainer>
                  </VideoDetailsCont>
                </ListItem>
              </Link>
            ))}
          </VideoCardList>
        ) : (
          <NoVideoView>
            <NoVideoImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt=" no videos"
            />
            <NoVideoheading headingColor={headingColor}>
              No Search Reasult Found
            </NoVideoheading>
            <NoVideoNote noteColor={noteColor}>
              Try different Keywords or remove search filter
            </NoVideoNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoVideoView>
        )
      }}
    </VideoAndThemeContext.Consumer>
  )
}
export default HomeVideos
