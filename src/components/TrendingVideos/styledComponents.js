import styled from 'styled-components'

export const TrendingCont = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-left: 25%;
  overflow-y: auto;
`
export const TrendingVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const TrendingTitleIconCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const TrendingText = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  color: ${props => props.color};
`
export const TrendingVideoList = styled.ul`
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
