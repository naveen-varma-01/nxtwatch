import styled from 'styled-components'

export const FailureViewCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  baground: none;
`
export const FailedImg = styled.img`
  width: 450px;
`
export const FailuredHeading = styled.h1`
    font-family:"Roboto;
    font-size:25px;
    text-align:center;
    color:${props => props.headingColor};
`
export const FailedNote = styled.p`
        font-family:"Roboto;
        font-size:15px;
        text-align:center;
        color:${props => props.noteColor};

`
export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 5px;
  color: #ffffff;
`
