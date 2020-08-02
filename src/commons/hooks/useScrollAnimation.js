import React, { useState, useLayoutEffect, useRef } from 'react'

function useScrollAnimation(
  { visible_class_name = "is-visible" } = {}
) {
  const [currentElement, setCurrentElement] = useState(null)

  const elementToAnimateRef = useRef()

  const scroll = window.requestAnimationFrame || function (callback) {
    setTimeout(callback, 1000 / 60);
  }

  // const isElementInViewport = (element) => {
  //   const rect = element.getBoundingClientRect()
  //   const { bottom, top } = rect
  //   const height = (window.innerHeight || document.documentElement.clientHeight)

  //   return (
  //     (top <= 0 && bottom >= 0) ||
  //     (bottom >= height && top >= height) ||
  //     (top >= 0 && bottom <= height)
  //   )
  // }
  const isElementInViewport = (element) => {
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

  const toogleVerticalClass = () => {
    const element = currentElement
    if (isElementInViewport(element)) {
      element.classList.add(visible_class_name)
    } else {
      element.classList.remove(visible_class_name)
    }
    scroll(toogleVerticalClass)
  }

  useLayoutEffect(() => {
    setCurrentElement(elementToAnimateRef.current)
    if (currentElement) (
      toogleVerticalClass()
    )
  }, [currentElement])

  return elementToAnimateRef
}

export default useScrollAnimation