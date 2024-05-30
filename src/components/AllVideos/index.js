import {Thumb, Para, Icon, List, Cont} from '../Home/StyledComponents'

const AllVideos = props => {
  const {details} = props
  const {
    id,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = details

  return (
    <List>
      <Cont>
        <Thumb src={thumbnailUrl} />
        <Icon src={profileImageUrl} />
        <Para>{title}</Para>
        <Para>{name}</Para>
        <Para>{viewCount}</Para>
        <Para>{publishedAt}</Para>
      </Cont>
    </List>
  )
}
export default AllVideos
