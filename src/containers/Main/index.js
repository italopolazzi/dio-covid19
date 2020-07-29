import React from "react"
import StyledMain from "./style"
import Animation from 'components/Animation'
import CountriesData from 'components/CountriesData'

function Main(props) {
  return (
    <StyledMain>

      <nav>
        <ul>
          <li>
            <a href="#news">News</a>
            <a href="#reports">Reports</a>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>

      {/* <header>

        <div className="col lg:order-1">
          <div className="card">
            <h1>Covid 19 Reports</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas eum earum commodi, quae omnis magnam. Suscipit, numquam quae officia expedita in sed consequatur quia maxime reprehenderit exercitationem, saepe aut recusandae!</p>
            <a className="button" href="#">See reports</a>
          </div>
        </div>

        <div className="col lg:order-2 p-20 lg:p-0">
          <Animation />
        </div>

      </header> */}
      <main className="flex flex-col">

        <CountriesData />

        <section id="about">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sequi non, quo similique, consequatur enim ducimus voluptatum repellendus libero expedita totam maxime recusandae error impedit facilis aut. Minima, asperiores saepe?
          </p>
        </section>

      </main>
    </StyledMain>
  )
}

export default Main