
import React from "react"
import StyledAppNav from './style'

function AppNav(props) {
  return (
    <StyledAppNav>
      <ul className="flex">
        <li className="p-4"><a href="#news-row">News</a></li>
        <li className="p-4"><a href="#reports-row">Reports</a></li>
        <li className="p-4"><a href="#about-section">About</a></li>
      </ul>
    </StyledAppNav>
  )
}

export default AppNav