import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={2}
    width={1360}
    height={500}
    viewBox="0 0 1360 500"
    backgroundColor="#bfbfbf"
    foregroundColor="#a6a2a2"
    // {...props}
  >
    <rect x="2" y="1" rx="3" ry="3" width="1360" height="70" /> 
    <rect x="574" y="450" rx="3" ry="3" width="223" height="50" /> 
    <rect x="500" y="100" rx="0" ry="0" width="400" height="300" />
  </ContentLoader>
)

export default MyLoader

