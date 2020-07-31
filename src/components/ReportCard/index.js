import React, { useEffect, useState } from 'react'
import StyledReportCard from './style'

const ReportCard = ({ datum }) => {
  const { key, value } = datum

  // const colors = ['blue', 'red', 'green', 'yellow', 'pink', 'orange', 'indigo', 'green', 'purple']
  // const selected = index % colors.length

  return (
    <StyledReportCard>
      <div className="w-full text-right flex items-center justify-start">
        <div className="h-4 w-4 mr-4 rounded-full bg-yellow-400"></div>
        <div className="bg-white rounded-full">{key}</div>
      </div>
      <div className="font-serif text-6xl">{value}</div>
      {/* <hr className="bg-black border-1 border-yellow-400 text-black" /> */}
    </StyledReportCard>
  )
}

export default ReportCard