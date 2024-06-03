import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import VideoAndThemeContext from '../../context/VideoAndThemeContext'

import {
  NavBar,
  NavlgContainer,
  NavItems,
  NavLink,
  NavLinkContainer,
  NavText,
  ContactInfo,
  ContactHeading,
  ContactsIconContainer,
  ContactImage,
  ContactNote,
} from './styledComponents'

class NavigationBar extends Component {
  rendertabItems = () => (
    <VideoAndThemeContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeTab} = value
        const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'

        const onClickHomeTab = () => {
          changeTab('Home')
        }
        const onClickTrendingTab = () => {
          changeTab('Trending')
        }
        const onClickGamigTab = () => {
          changeTab('Gaming')
        }
        const onClickSavedTab = () => {
          changeTab('Saved')
        }
        return (
          <NavBar>
            <NavlgContainer bgColor={bgColor}>
              <NavItems>
                <NavLink to="/">
                  <NavLinkContainer
                    key="home"
                    onClick={onClickHomeTab}
                    bgColor={activeTab === 'Home' ? activeTabBg : null}
                  >
                    <AiFillHome size="25" />
                    <NavText color={textColor}>Home</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/trending">
                  <NavLinkContainer
                    key="trending"
                    onClick={onClickTrendingTab}
                    bgColor={activeTab === 'Trending' ? activeTabBg : null}
                  >
                    <HiFire size="25" />
                    <NavText color={textColor}>Trending</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/gaming">
                  <NavLinkContainer
                    key="gaming"
                    onClick={onClickGamigTab}
                    bgColor={activeTab === 'Gaming' ? activeTabBg : null}
                  >
                    <SiYoutubegaming size="25" />
                    <NavText color={textColor}>Gaming</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/saved-vidoes">
                  <NavLinkContainer
                    key="saved"
                    onClick={onClickSavedTab}
                    bgColor={activeTab === 'Saved' ? activeTabBg : null}
                  >
                    <CgPlayListAdd size="25" />
                    <NavText color={textColor}>Saved Videos</NavText>
                  </NavLinkContainer>
                </NavLink>
              </NavItems>
              <ContactInfo>
                <ContactHeading color={textColor}>CONTACT US</ContactHeading>
                <ContactsIconContainer>
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                    alt="linked in logo"
                  />
                </ContactsIconContainer>
                <ContactNote color={textColor}>
                  {' '}
                  Enjoy ! Now to see your channels and recomendations!
                </ContactNote>
              </ContactInfo>
            </NavlgContainer>
          </NavBar>
        )
      }}
    </VideoAndThemeContext.Consumer>
  )

  render() {
    return <>{this.rendertabItems()}</>
  }
}
export default NavigationBar
