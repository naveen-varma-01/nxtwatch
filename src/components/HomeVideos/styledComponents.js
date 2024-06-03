import styled from 'styled-components'

export const NoVideoView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NoVideoImg = styled.img`
  width: 450px;
`
export const NoVideoheading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
`
export const NoVideoNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.noteColor};
`
export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
`

export const VideoCardList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 27%;
`
export const ListItem = styled.li`
  width: 280px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  background: none;
  align-self: center;
`
export const ThumbnailImg = styled.img`
  width: 100%;
`
export const VideoDetailsCont = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 20px;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`
export const ViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  padding-left: 5px;
  padding-right: 5px;
`
