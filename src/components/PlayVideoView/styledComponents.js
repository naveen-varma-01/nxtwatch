import styled from 'styled-components'

export const Videoplayer = styled.div`
  padding: 20px;
`
export const VideoTitle = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const VideoStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Videostatus = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const PlayVideoDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  padding-left: 5px;
  padding-right: 5px;
`
export const SocialButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const SocialButton = styled.button`
  display: flex;

  justify-content: space-between;
  align-items: center;
  border: none;
  margin-right: 10px;
  color: ${props => props.color};
`
export const Buttontext = styled.span`
  margin-left: 5px;
  color: #2563eb;
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`
export const ChannelImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 20px;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const ChannelSubscribers = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const Channeldesc = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const BtnCont = styled.div`
  display: flex;
  background: none;
`
