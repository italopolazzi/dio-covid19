import React from 'react'
import StyledReports from './style'
import ReportCard from 'components/ReportCard'


const Reports = () => {
  
  
  return (
    <StyledReports>
      <ReportCard country="Brazil" />
      <ReportCard country="Italy" />
      <ReportCard country="South Africa" />
    </StyledReports>
  )
}

export default Reports