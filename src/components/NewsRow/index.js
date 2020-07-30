import React, { useEffect, useState, useRef } from 'react'
import StyledNewsRow from './style'
import Api from 'commons/api/CoronaVirus19'
import NewsCard from 'components/NewsCard'


let isDown = false;
let moved = false;
let startX;
let scrollLeft;
let slider;

const NewsRow = ({ country }) => {
  const [data, setData] = useState(null)
  const [delta, setDelta] = useState({ y: 0, x: 0 })

  useEffect(() => {
    Api.getCountryNews(country.code).then(data => setData(data))
  }, [country.code])

  const ApiData = () => {
    if (!data) return <span>No available data</span>
    return data.map((datum, index) => <NewsCard key={index} datum={datum} />)
  }

  const newsRowRef = useRef()

  const slider_events = {
    mousedown: e => {
      e.preventDefault();
      moved = false;
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    },
    mouseleave: () => {
      isDown = false;
      slider.classList.remove("active");
    },
    mouseup: () => {
      isDown = false;
      slider.classList.remove("active");
    },
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


    slider = newsRowRef.current

    Object.keys(slider_events).forEach(key => slider.addEventListener(key, slider_events[key]))

    return () => Object.keys(slider_events).forEach(key => slider.removeEventListener(key, slider_events[key]))
  }, [])



  return (
    <div className="flex flex-col">


      <StyledNewsRow ref={newsRowRef}>
        <ApiData />
      </StyledNewsRow>

    </div>
  )
}

export default NewsRow
