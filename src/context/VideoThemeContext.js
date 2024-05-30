import React from 'react'

const VideoAndThemeContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  toggleTheme: () => {},
  addVideo: () => {},
})
export default VideoAndThemeContext
