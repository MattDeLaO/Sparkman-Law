import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
min-height: 100vh;
`
export const Layout = ({children}) => {
  return (
    <PageWrapper>
      {children}
    </PageWrapper>
  )
}
