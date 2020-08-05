import React from 'react'
import StyledCodeList from './style'
import countries from 'commons/constants/countries'

const CodeList = (props) => {
  const CodeListItem = ({ country: { name, code } }) => {
    return (
      <div key={code} className="code-list__item">
        <div className="code-list__item-name">{name}</div>
        <div className="code-list__item-code">{code}</div>
      </div>
    )
  }

  const CodeListItems = () => {
    return Object.values(countries)
      .map((country, index) => <CodeListItem key={index} country={country} />)
  }

  return (
    <StyledCodeList>
      <CodeListItems />
    </StyledCodeList>
  )
}

export default CodeList