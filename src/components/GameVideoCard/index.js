import {Link} from 'react-router-dom'
import {
  GamingListItem,
  GamingThumbnailImg,
  GamingContentSection,
  GamingTitle,
  GamingViewsAndDate,
} from './styledComponents'

import VideoAndThemeContext from '../../context/VideoAndThemeContext'

const GameVideoCard = props => {
  const {GameVideoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = GameVideoDetails
  return (
    <VideoAndThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <Link to={`/videos/${id}`} key={id}>
            <GamingListItem>
              <GamingThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <GamingContentSection>
                <GamingTitle color={textColor}>{title}</GamingTitle>
                <GamingViewsAndDate color={textColor}>
                  {viewCount} Watching Worldwide
                </GamingViewsAndDate>
              </GamingContentSection>
            </GamingListItem>
          </Link>
        )
      }}
    </VideoAndThemeContext.Consumer>
  )
}
export default GameVideoCard
