import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Headers from '../Headers'
import NavigationBar from '../NavBar'
import VideoAndThemeContext from '../../context/VideoAndThemeContext'
import FailureView from '../FailureView'
import TrendVideoCard from '../TrendingVideoCard'

import {
  TrendingCont,
  TrendingTitleIconCont,
  TrendingVideoTitle,
  TrendingVideoList,
  TrendingText,
  LoaderCont,
} from './styledComponents'

const apiStatusConst = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class TrendingVideos extends Component {
  state = {trendingVideos: [], apiStatus: apiStatusConst.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConst.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        trendingVideos: updatedData,
        apiStatus: apiStatusConst.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConst.failure})
    }
  }

  renderSuccessView = () => {
    const {trendingVideos} = this.state
    console.log(trendingVideos[0])
    return (
      <TrendingVideoList>
        {trendingVideos.map(each => (
          <TrendVideoCard key={each.id} TrendingVideoDetails={each} />
        ))}
      </TrendingVideoList>
    )
  }

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoadingView = () => (
    <LoaderCont data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </LoaderCont>
  )

  renderTrendingVideosList = () => {
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
              <TrendingCont data-testid="gaming" bgColor={bgColor}>
                <TrendingVideoTitle>
                  <TrendingTitleIconCont>
                    <HiFire size="25" color="#ff0000" />
                    <TrendingText color={textColor}>Trending</TrendingText>
                  </TrendingTitleIconCont>
                </TrendingVideoTitle>
                {this.renderTrendingVideosList()}
              </TrendingCont>
            </div>
          )
        }}
      </VideoAndThemeContext.Consumer>
    )
  }
}
export default TrendingVideos
