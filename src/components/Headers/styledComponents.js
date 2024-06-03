import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarHeader = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgColor};
  padding-left: 30px;
  padding-right: 30px;
`
export const HeaderLogo = styled.img`
  width: 100px;
  height: 45px;
`
export const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 10px;
`
export const LogoutButton = styled.button`
  border: 1px solid;
  font-family: 'Roboto';
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
`
export const PropfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

export const ModelCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 150px;
  width: 250px;
  background-color: #cbd5e1;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  outline: none;
  margin: 12px;
  color: grey;
  font-family: 'Roboto';
  font-size: 12px;
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  align-self: flex-end;
  border: 1px solid #3b82f6;
  padding: 8px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  outline: none;
  margin: 12px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
`

export const Modeldesc = styled.p`
  text-align: center;
  color: #000000;
  font-family: 'Roboto';
  font-size: 12px;
  margin: 12px;
`
export const ButtonsCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const LogoLink = styled(Link)`
  text-decoration: none;`
