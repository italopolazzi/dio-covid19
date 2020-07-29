import React, { useState, useEffect } from 'react'
import StyledCodeList from './style'
import countries from 'commons/constants/countries'

const CodeList = ({ open, closeCallback }) => {
  const [visible, setVisible] = useState(open)

  useEffect(() => {
    setVisible(open)
  }, [open])

  if (!visible) {
    return null
  }

  return (
    <StyledCodeList>
      <div className="container">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold">Countries' Code List</h1>
          <button onClick={() => closeCallback()} className="border-8 border-black font-bold p-2 rounded-lg uppercase">Close</button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3">
          {Object.values(countries).map(country => (
            <div key={country.code} className="flex flex-col p-4">
              <div className="text-2xl">{country.name}</div>
              <div className="border-b-8 border-yellow-400 inline font-bold text-4xl w-1/6">{country.code}</div>
            </div>
          ))}
        </div>

      </div>
    </StyledCodeList>
  )
}

export default CodeList