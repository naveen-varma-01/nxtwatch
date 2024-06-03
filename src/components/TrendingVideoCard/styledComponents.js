import styled from 'styled-components'

export const TrendingListItem = styled.li`
  width: 280px;
  background: none;
  display: flex;
  flex-direction: column;
`
export const TrendingThumbnailImg = styled.img`
  width: 300px;
  height: 300px;
  align-self: center;
`
export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const TrendingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
  margin-bottom: 0px;
`
export const TrendingViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`
