import React, { useEffect, useState } from 'react'
import StyledReportCard from './style'

import useScrollAnimation from 'commons/hooks/useScrollAnimation'

const ReportCard = ({ datum }) => {
  const { key, value } = datum

  // const colors = ['blue', 'red', 'green', 'yellow', 'pink', 'orange', 'indigo', 'green', 'purple']
  // const selected = index % colors.length
  const elementRef = useScrollAnimation()
  return (
    <StyledReportCard ref={elementRef}>
      <div className="w-full text-right flex items-center justify-start">
        <div className="report-card-pin h-4 w-4 mr-4 rounded-full bg-yellow-400"></div>
        <div className="report-card-key bg-white rounded-full">{key}</div>
      </div>
      <div className="report-card-value font-serif text-6xl">{value}</div>
      {/* <hr className="bg-black border-1 border-yellow-400 text-black" /> */}
    </StyledReportCard>
  )
}

export default ReportCard