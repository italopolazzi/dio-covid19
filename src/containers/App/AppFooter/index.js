import React from "react"
import StyledAppFooter from './style'

function AppAboutSection(props) {

  const items = [
    "React",
    "LottieFiles",
    "Coronavirus",
    "News",
    "Illustrator",
    "VSCode",
    "Tailwind",
    "PWA",
    "JavaScript",
    "CSS3",
    "HTML5",
  ]

  const colors = [
    "red",
    "green",
    "yellow",
    "blue",
  ]

  const getBorderColor = index => {
    const { length } = colors
    const color_index = index % length
    return `border-${colors[color_index]}-400`
  }

  const linkListItems = () => {
    const classNames = index => [getBorderColor(index), "footer-card__badge"].join(" ")
    return (
      items.map((item, index) => <li key={index} className={classNames(index)}>{item}</li>)
    )
  }

  return (
    <StyledAppFooter {...props}>
      <div className="container mx-auto px-4">
        <div className="footer-message py-16">
          <div className="flex font-black font-serif items-center justify-center text-4xl">
            Don't forget
        </div>
          <div className="flex font-black font-serif items-center justify-center text-6xl">
            #STAY_HOME!
        </div>
          <div className="flex font-black font-serif items-center justify-center text-4xl">
            💛💙💚❤️
        </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 items-baseline">
          <div className="footer-card">
            <div className="footer-card__header">
              <img className="footer-logo" src="/logo192.png" alt="App logo - A sliced Coronavirus" />
              <h1 className="footer-card__title">Covid-19 Reports</h1>
            </div>
            <div className="footer-card__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsa provident suscipit ad, praesentium eius quaerat ea nisi eveniet commodi fugiat ducimus maxime esse ipsam autem ratione cupiditate voluptatum debitis.
            </div>
          </div>
          <div className="footer-card">
            <div className="footer-card__header">
              <h1 className="footer-card__title">Links</h1>
            </div>
            <div className="footer-card__content">
              <ul className="footer-card__badge-group">
                {linkListItems()}

              </ul>
            </div>
          </div>
          <div className="footer-card">
            <div className="footer-card__header">
              <h1 className="footer-card__title">Credits</h1>
            </div>
            <div className="footer-card__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsa provident suscipit ad, praesentium eius quaerat ea nisi eveniet commodi fugiat ducimus maxime esse ipsam autem ratione cupiditate voluptatum debitis.
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          Made by Ítalo Polazzi - 2020
        </div>
      </div>
    </StyledAppFooter>
  )
}

export default AppAboutSection