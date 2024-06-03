import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Headers from '../Headers'
import NavigationBar from '../NavBar'
import VideoAndThemeContext from '../../context/VideoAndThemeContext'
import HomeVideos from '../HomeVideos'
import FailureView from '../FailureView'

import {
  HomeContainer,
  BannerCont,
  BannerLeftPart,
  BannerRightPart,
  BannerImage,
  BannerButton,
  Bannertext,
  BannerCloseButton,
  SearchIconCont,
  SearchInput,
  LoaderCont,
  SearchContainer,
} from './styledComponents'

const apiStatusConst = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}
class Home extends Component {
  state = {
    homevideos: [],
    searchInput: '',
    apiStatus: apiStatusConst.initial,
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConst.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedata = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      }))
      console.log(updatedata)
      this.setState({apiStatus: apiStatusConst.success, homevideos: updatedata})
    } else {
      this.setState({apiStatus: apiStatusConst.failure})
    }
  }

  oncloseBanner = () => {
    this.setState({bannerDisplay: 'none'})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchresult = () => {
    this.getVideos()
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderLoadingView = () => (
    <LoaderCont data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderCont>
  )

  renderVideosView = () => {
    const {homevideos} = this.state
    return <HomeVideos homevideos={homevideos} onRetry={this.onRetry} />
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderHomeVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConst.success:
        return this.renderVideosView()
      case apiStatusConst.failure:
        return this.renderFailureView()
      case apiStatusConst.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, bannerDisplay} = this.state

    return (
      <VideoAndThemeContext.Consumer>
        {value => {
          const {isDarktheme} = value
          const bgColor = isDarktheme ? '#181818' : '#f9f9f9'
          const textColor = isDarktheme ? '#f9f9f9' : '#231f20'
          const display = bannerDisplay === 'flex' ? 'flex' : 'none'
          return (
            <>
              <Headers />
              <NavigationBar />

              <HomeContainer data-testid="home" bgColor={bgColor}>
                <BannerCont data-testid="banner" display={display}>
                  <BannerLeftPart>
                    <BannerImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <Bannertext>
                      Buy nxt watch premium prepaid plans with <br />
                      UPI
                    </Bannertext>
                    <BannerButton type="button">GET IT NOW </BannerButton>
                  </BannerLeftPart>
                  <BannerRightPart>
                    <BannerCloseButton
                      data-testid="close"
                      onClick={this.oncloseBanner}
                    >
                      <AiOutlineClose size="25" />
                    </BannerCloseButton>
                  </BannerRightPart>
                </BannerCont>
                <SearchContainer>
                  <SearchInput
                    type="search"
                    placeholder="search"
                    value={searchInput}
                    onChange={this.onChangeInput}
                    color={textColor}
                  />
                  <SearchIconCont
                    data-testid="searchButton"
                    onClick={this.getSearchresult}
                  >
                    <AiOutlineSearch size="25" />
                  </SearchIconCont>
                </SearchContainer>

                {this.renderHomeVideos()}
              </HomeContainer>
            </>
          )
        }}
      </VideoAndThemeContext.Consumer>
    )
  }
}
export default Home
