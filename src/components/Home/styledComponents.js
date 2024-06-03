import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 50px;
  margon-bottom: 50px;
  overflow-y: auto;
`
export const BannerCont = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  height: 200px;
  padding: 20px;
  margin-left: 50px;
  text-align: center;
  display: ${props => props.display};
`

export const BannerLeftPart = styled.div`
  width: 50%;
`
export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const BannerImage = styled.img`
  width: 80px;
  height: 30px;
`
export const BannerButton = styled.button`
  border: 1px solid #000000;
  color: #000000;
  background: none;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 12px;
  padding-right: 12px;
`
export const Bannertext = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: #000000;
`
export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 22px;
`
export const SearchIconCont = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  width: 70px;
  border: none;
`

export const SearchInput = styled.input`
  padding: 5px;
  color: ${props => props.textColor};
  font-family: 'Roboto';
  margin-left: 10px;
`
export const LoaderCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
`
