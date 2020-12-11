import React from 'react'
import styled from 'styled-components'

const StyledAddress = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 text-align: center;
 height: 20%;
 margin-top: 20px;
 margin-bottom: 10px;
 color: ${props => props.secondary ? 'black' : 'white'}
`
export const Address = props => {
    return (
        <StyledAddress secondary={props.secondary}>
            2928 N McKee Cir, Ste 121
            <br/>
            Fayetteville, AR 72703
        </StyledAddress>
    )
}
