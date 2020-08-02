import React, { useState, useLayoutEffect, useRef } from 'react'

const isElementVerticallyInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  const { bottom, top } = rect
  const height = (window.innerHeight || document.documentElement.clientHeight)
  const height20 = height * 0.2
  return (
    (top <= height20 && bottom >= 0) ||
    (bottom >= height && top >= height) ||
    (top >= height20 && bottom <= height)
  )
}

const isElementHorizontallyInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  let { right, left } = rect
  const width = (window.innerWidth || document.documentElement.clientWidth)
  const width20 = width * 0.2
  return (
    (left >= -width20 && right <= 0) ||
    (right >= width && left <= width) ||
    (left >= -width20 && right <= width)
  )
}

const isElementInViewport = (element) => {
  return isElementHorizontallyInViewport(element) && isElementVerticallyInViewport(element)
}

const getViewportTester = direction => {
  switch (direction) {
    case "horizontal":
      return isElementHorizontallyInViewport;
    case "vertical":
      return isElementVerticallyInViewport;
    default:
      return isElementInViewport
  }
}

function useScrollAnimation(
  { visible_class_name = "is-visible", direction = "horizontal" } = {}
) {
  const [currentElement, setCurrentElement] = useState(null)

  const elementToAnimateRef = useRef()

  const scroll = window.requestAnimationFrame || function (callback) {
    setTimeout(callback, 1000 / 60);
  }

  const inViewportTester = getViewportTester(direction)

  const toogleClass = () => {
    const element = currentElement
    if (inViewportTester(element)) {
      element.classList.add(visible_class_name)
    } else {
      element.classList.remove(visible_class_name)
    }
    scroll(toogleClass)
  }

  useLayoutEffect(() => {
    setCurrentElement(elementToAnimateRef.current)
    if (currentElement) (
      toogleClass()
    )
  }, [currentElement])

  return elementToAnimateRef
}

export default useScrollAnimation