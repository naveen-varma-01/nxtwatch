import styled from 'styled-components'

export const SavedCont = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-left: 25%;
  overflow-y: auto;
`
export const SavedVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const SavedTitleIconCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const SavedVideoText = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  color: ${props => props.headingColor};
`
export const SavedVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
export const NoSavedvideo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSavedVideoImg = styled.img`
  width: 400px;
`
export const NosavedVideoHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`
export const NoSavedVideoNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center;
`
