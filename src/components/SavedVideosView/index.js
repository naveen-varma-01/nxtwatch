import {Link} from 'react-router-dom'

import {
  SavedVidoesContainer,
  VideoDetailsCont,
  ThumbnailImg,
  VideoTextCont,
  VideoHeading,
  VideoChannelName,
  VideoViewsAndDate,
} from './styledComponents'

const SavedVideosView = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount, publishedAt, name} = videoDetails
  return (
    <>
      <Link to={`/videos/${id}`}>
        <SavedVidoesContainer>
          <VideoDetailsCont>
            <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
            <VideoTextCont>
              <VideoHeading>{title}</VideoHeading>
              <VideoChannelName>{name}</VideoChannelName>
              <VideoViewsAndDate>
                {viewCount} {publishedAt}
              </VideoViewsAndDate>
            </VideoTextCont>
          </VideoDetailsCont>
        </SavedVidoesContainer>
      </Link>
    </>
  )
}
export default SavedVideosView
