import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
min-height: 100vh;
`
const MainLayout = ({children}) => {
  return (
    <PageWrapper>
      {children}
    </PageWrapper>
  )
}

export default MainLayout