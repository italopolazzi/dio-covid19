import React, { createContext, useLayoutEffect, useState } from "react"

const mountMediaQueriesResults = breakpoints => {

  const getMediaQuerySizes = () => {
    const clientWidth = window.innerWidth
    const { sm, md, lg, xl } = breakpoints

    const sizeTester = (a, b, c) => a <= b && b < c

    return {
      xsOnly: sizeTester(-Infinity, clientWidth, sm),
      smOnly: sizeTester(sm, clientWidth, md),
      mdOnly: sizeTester(md, clientWidth, lg),
      lgOnly: sizeTester(lg, clientWidth, xl),
      xlOnly: sizeTester(xl, clientWidth, Infinity),
      smAndUp: clientWidth >= sm,
      mdAndUp: clientWidth >= md,
      lgAndUp: clientWidth >= lg,
      xlAndUp: clientWidth >= xl,
      xsAndDown: clientWidth < sm,
      smAndDown: clientWidth < md,
      mdAndDown: clientWidth < lg,
      lgAndDown: clientWidth < xl
    }
  }

  const getMediaQueryOrientations = () => {
    try {
      const { type } = window.screen.orientation
      const portrait = type === "portrait-primary" || type === "portrait-secondary"
      return {
        isPortrait: portrait,
        isLandscape: !portrait
      }
    } catch (error) {
      // The orientation API isn't supported in this browser.
      return {}
    }
  }

  const mediaSizes = getMediaQuerySizes()
  const mediaOrientations = getMediaQueryOrientations()

  return {
    ...mediaSizes,
    ...mediaOrientations
  }
}

const getBreakpointsNumbersWithoutUnits = breakpoints => {
  const breakpoint_without_units = Object.keys(breakpoints)
    .reduce((acc, key) => {
      const [num] = breakpoints[key].match(/\d+/g).map(Number)
      acc[key] = num
      return acc
    }, {})
  return breakpoint_without_units
}

const ResponsiveContext = createContext({})

function ResponsiveProvider({ children, breakpointsConfig }) {

  const breakpoints = getBreakpointsNumbersWithoutUnits(breakpointsConfig)

  const handleResize = event => {
    const newBreakpoints = mountMediaQueriesResults(breakpoints)
    setCurrentMediaQueries(newBreakpoints)
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  const [currentMediaQueries, setCurrentMediaQueries] = useState(mountMediaQueriesResults(breakpoints))

  return (
    <ResponsiveContext.Provider value={{ currentMediaQueries }}>
      {children}
    </ResponsiveContext.Provider>
  )
}

function ResponsiveConditional({ children, medias = [] }) {

  const consumeIt = ({ currentMediaQueries }) => {
    const shouldRender = medias.map(key => currentMediaQueries[key]).every(Boolean)
    if (shouldRender) {
      return children
    }
    return null
  }
  return (
    <ResponsiveContext.Consumer>{consumeIt}</ResponsiveContext.Consumer>
  )
}

export {
  ResponsiveProvider,
  ResponsiveConditional,
}


