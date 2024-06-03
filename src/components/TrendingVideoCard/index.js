import {Link} from 'react-router-dom'
import {
  TrendingListItem,
  TrendingThumbnailImg,
  TrendingContentSection,
  TrendingTitle,
  TrendingViewsAndDate,
} from './styledComponents'

import VideoAndThemeContext from '../../context/VideoAndThemeContext'

const TrendVideoCard = props => {
  const {TrendingVideoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = TrendingVideoDetails
  return (
    <VideoAndThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <Link to={`/videos/${id}`} key={id}>
            <TrendingListItem>
              <TrendingThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <TrendingContentSection>
                <TrendingTitle color={textColor}>{title}</TrendingTitle>
                <TrendingViewsAndDate color={textColor}>
                  {viewCount} Watching Worldwide
                </TrendingViewsAndDate>
              </TrendingContentSection>
            </TrendingListItem>
          </Link>
        )
      }}
    </VideoAndThemeContext.Consumer>
  )
}
export default TrendVideoCard
