
import React, { useRef, useLayoutEffect, useState } from "react"
import StyledAppNav from './style'

function AppNav(props) {
  const [lastScroll, setLastScroll] = useState(window.scrollY)
  const [element, setElement] = useState(null)

  const navRef = useRef()

  const handleScroll = event => {
    const currentScroll = window.scrollY
    if (lastScroll > currentScroll) {
      element.classList.remove("is-active")
    } else {
      element.classList.add("is-active")
    }
    setLastScroll(currentScroll)
  }

  useLayoutEffect(() => {
    setElement(navRef.current)

    if (element) {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [element, lastScroll])

  return (
    <StyledAppNav ref={navRef}>
      <ul className="app-nav__list">
        <li className="app-nav__list-item"><a href="#app-header">Start</a></li>
        <li className="app-nav__list-item"><a href="#reports">Reports</a></li>
        <li className="app-nav__list-item"><a href="#news">News</a></li>
        <li className="app-nav__list-item"><a href="#app-about-section">About</a></li>
      </ul>
    </StyledAppNav>
  )
}

export default AppNav