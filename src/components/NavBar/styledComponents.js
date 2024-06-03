import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
`
export const NavlgContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:95%:
    width:250px;
    top:60px;
    position:fixed;
    background-color:${props => props.bgColor};
    @media screen and (max-width:768px){
        display:none;
    }

`
export const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding: 0;
  margin-top: 0;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavLinkContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
`
export const NavText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  margin-left: 12px;
  color: ${props => props.color};
`
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`
export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`
export const ContactsIconContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ContactImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  margin-right: 10px;
`
export const ContactNote = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
