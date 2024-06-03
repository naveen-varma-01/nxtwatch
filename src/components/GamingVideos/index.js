import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Headers from '../Headers'
import NavigationBar from '../NavBar'
import VideoAndThemeContext from '../../context/VideoAndThemeContext'
import FailureView from '../FailureView'
import GameVideoCard from '../GameVideoCard'

import {
  GamingCont,
  GamingTitleIconCont,
  GamingVideoTitle,
  GamingVideoList,
  GamingText,
  LoaderCont,
} from './styledComponents'

const apiStatusConst = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class GamingVideos extends Component {
  state = {gamingVideos: [], apiStatus: apiStatusConst.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConst.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()

      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConst.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConst.failure})
    }
  }

  renderSuccessView = () => {
    const {gamingVideos} = this.state
    console.log(gamingVideos[0])
    return (
      <GamingVideoList>
        {gamingVideos.map(each => (
          <GameVideoCard key={each.id} GameVideoDetails={each} />
        ))}
      </GamingVideoList>
    )
  }

  onRetry = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoadingView = () => (
    <LoaderCont data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </LoaderCont>
  )

  renderGamingVideosList = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConst.success:
        return this.renderSuccessView()
      case apiStatusConst.failure:
        return this.renderFailureView()
      case apiStatusConst.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <VideoAndThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <div>
              <Headers />
              <NavigationBar />
              <GamingCont data-testid="gaming" bgColor={bgColor}>
                <GamingVideoTitle>
                  <GamingTitleIconCont>
                    <SiYoutubegaming size="25" color="#ff0000" />
                    <GamingText color={textColor}>Gaming</GamingText>
                  </GamingTitleIconCont>
                </GamingVideoTitle>
                {this.renderGamingVideosList()}
              </GamingCont>
            </div>
          )
        }}
      </VideoAndThemeContext.Consumer>
    )
  }
}
export default GamingVideos
