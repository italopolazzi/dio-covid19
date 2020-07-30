import React, { useEffect, useRef } from 'react'

const useHorizontalSlider = () => {
  
  const reference = useRef()

  const active_class = "slider-active"
  let isDown = false;
  let moved = false;
  let startX;
  let scrollLeft;
  let slider;

  const cancelSlider = () => {
    isDown = false;
    slider.classList.remove(active_class);
  }
  const slider_events = {
    mousedown: e => {
      e.preventDefault();
      moved = false;
      isDown = true;
      slider.classList.add(active_class);
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    },
    mouseleave: cancelSlider,
    mouseup: cancelSlider,
    mousemove: e => {
      if (!isDown) return;
      e.preventDefault();
      moved = true;
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX;
      slider.scrollLeft = scrollLeft - walk;
    },
    click: e => {
      if (moved) {
        e.preventDefault()
      }
    }
  }

  useEffect(() => {
    slider = reference.current

    slider.style.overflowX = "auto"
    slider.style.overflowY = "hidden"

    Object.keys(slider_events).forEach(key => slider.addEventListener(key, slider_events[key]))

    return () => Object.keys(slider_events).forEach(key => slider.removeEventListener(key, slider_events[key]))
  }, [])

  return reference
}

export default useHorizontalSlider