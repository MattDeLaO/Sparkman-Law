import React from 'react'
import styled from 'styled-components'

const StyledBulletPoint = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify: space-evenly;
padding: 10px;
margin-bottom: 10px;
`
const StyledIcon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify: center;
margin-right: 10px;
`
export const BulletPoint = ({icon, text}) =>
        <StyledBulletPoint>
          <StyledIcon>{icon}</StyledIcon>
          {text}
        </StyledBulletPoint>
