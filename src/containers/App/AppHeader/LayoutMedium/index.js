
import React, { useState, useRef, useEffect } from "react"
import StyledLayoutMedium from './style'

function LayoutMedium(
  { handleInput,
    handleChange,
    countryCodeRef,
    headerCardRef,
    dialogActivator,
    Dialog,
    CodeList,
    image,
    dialogTitle
  } = {}
) {

  return (
    <StyledLayoutMedium>

      <div ref={headerCardRef} className="header-content" >
        <div className="card">
          <h1 className="header-title font-serif">Covid-19</h1>
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

          <Dialog title={dialogTitle} activator={dialogActivator("See the available codes list")} >
            <CodeList />
          </Dialog>

        </div>
      </div>

      <div className="header-image" >
        <img src={image} alt="" />
      </div>

    </StyledLayoutMedium>
  )
}

export default LayoutMedium