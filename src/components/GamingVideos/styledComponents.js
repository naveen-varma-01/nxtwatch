import styled from 'styled-components'

export const GamingCont = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-left: 25%;
  overflow-y: auto;
`
export const GamingVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const GamingTitleIconCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const GamingText = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  color: ${props => props.color};
`
export const GamingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 40px;
`
export const LoaderCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`
export const GamingListItem = styled.li`
  width: 280px;
  background: none;
  display: flex;
  flex-direction: column;
`

export const GamingThumbnailImg = styled.img`
  width: 300px;
  height: 300px;
  align-self: center;
`
export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const GamingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
  margin-bottom: 0px;
`
export const GamingViewsAndDate = styled.p`
font-family: 'Roboto';
font-size: 12px;
color: ${props => props.color};
`
