import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

import {AioutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import Sidebar from '../Sidebar'
import HomeVideos from '../HomeVideos'

import {CustomContainer} from './StyledComponents'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <CustomContainer>
        <div>
          <Sidebar />
        </div>
        <div>
          <HomeVideos />
        </div>
      </CustomContainer>
    </>
  )
}
export default Home
