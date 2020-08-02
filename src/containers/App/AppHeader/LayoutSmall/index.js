
import React from "react"
import StyledLayoutSmall from './style'
function LayoutSmall(
  { handleInput,
    handleChange,
    countryCodeRef,
    headerCardRef,
    dialogActivator,
    Dialog,
    CodeList,
    image } = {}
) {

  return (
    <StyledLayoutSmall>

      <div ref={headerCardRef} className="header-content" >
        <div className="header-image" >
          <img src={image} alt="" />
        </div>
        <div className="header-card">
          <h1 className="header-title">Covid-19</h1>
          <p>Search here for Reports and News about a country</p>
          <div className="input my-4">

            <label
              htmlFor="country-code"
              className="sr-only">Country code</label>
            <input
              maxLength="2"
              minLength="2"
              onInput={handleInput}
              ref={countryCodeRef}
              id="country-code"
              className="header-code-list-input"
              onChange={handleChange} />
          </div>



          <Dialog activator={dialogActivator("See the available codes list")} >
            <CodeList />
          </Dialog>

        </div>

      </div>


    </StyledLayoutSmall>
  )
}

export default LayoutSmall