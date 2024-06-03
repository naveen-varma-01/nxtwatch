import styled from 'styled-components'

export const NotFoundCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  min-height: 92vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
`
export const NotFoundVideoView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NotFoundVideoImg = styled.img`
  width: 450px;
`
export const NotFoundVideoHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.HeadingColor};
  text-align: center;
`
export const NotFoundVideoNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.HeadingColor};
  text-align: center;
`
