import React, { useEffect, useState } from 'react'
import StyledReportCard from './style'

const ReportCard = ({ datum }) => {
  const { key, value } = datum

  return (
    <StyledReportCard>
      <div className="api-data">
        <div className="bg-white font-semibold left-0 p-4 rounded-full shadow text-center uppercase">{key}</div>
        <div className="font-serif p-8 text-6xl">{value}</div>
      </div>
    </StyledReportCard>
  )
}

export default ReportCard