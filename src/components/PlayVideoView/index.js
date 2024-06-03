import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import {BiListPlus} from 'react-icons/bi'
import VideoAndThemeContext from '../../context/VideoAndThemeContext'

import {
  Videoplayer,
  VideoTitle,
  Videostatus,
  VideoStatusContainer,
  PlayVideoDot,
  SocialButtonContainer,
  SocialButton,
  Buttontext,
  ChannelImage,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  Channeldesc,
  BtnCont,
} from './styledComponents'

const PlayVideoView = props => {
  const {videoDetails, onclickDisliked, onclickLiked, isLiked, isDisLiked} =
    props
  const onClickLikedButton = () => {
    onclickLiked()
  }
  const onclickDislikedButton = () => {
    onclickDisliked()
  }
  return (
    <VideoAndThemeContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const textColor = isDarkTheme ? '#64748b' : '#231f20'
        let isSaved
        const Index = savedVideos.findIndex(each => each.id === videoDetails.id)

        if (Index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }
        const savedIconColor = isSaved ? '#2563eb' : textColor

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        return (
          <Videoplayer>
            <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
            <VideoTitle color={textColor}>{videoDetails.title}</VideoTitle>
            <VideoStatusContainer>
              <Videostatus color={textColor}>
                {videoDetails.viewCount} views
                <PlayVideoDot> &#8226; {videoDetails.publishedAt}</PlayVideoDot>
              </Videostatus>
              <SocialButtonContainer>
                <BtnCont>
                  <SocialButton
                    type="button"
                    onClick={onClickLikedButton}
                    color={isLiked ? '#2563eb' : '#64748b'}
                  >
                    <AiOutlineLike size="25" />
                    <Buttontext>Like</Buttontext>
                  </SocialButton>
                </BtnCont>
                <BtnCont>
                  <SocialButton
                    type="button"
                    onClick={onclickDislikedButton}
                    color={isDisLiked ? '#2563eb' : '#64748b'}
                  >
                    <AiOutlineDislike size="25" />
                    <Buttontext>disLike</Buttontext>
                  </SocialButton>
                </BtnCont>
                <BtnCont>
                  <SocialButton
                    type="button"
                    onClick={onClickSave}
                    color={savedIconColor}
                  >
                    <BiListPlus size="25" />
                    <Buttontext>{isSaved ? 'Saved' : 'Save'}</Buttontext>
                  </SocialButton>
                </BtnCont>
              </SocialButtonContainer>
            </VideoStatusContainer>
            <hr />
            <ChannelContainer>
              <ChannelImage
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
              <ChannelInfo>
                <ChannelName color={textColor}>{videoDetails.name}</ChannelName>
                <ChannelSubscribers color={textColor}>
                  {videoDetails.subscriberCount} Subscribers
                </ChannelSubscribers>
                <Channeldesc color={textColor}>
                  {videoDetails.description}
                </Channeldesc>
              </ChannelInfo>
            </ChannelContainer>
          </Videoplayer>
        )
      }}
    </VideoAndThemeContext.Consumer>
  )
}

export default PlayVideoView
