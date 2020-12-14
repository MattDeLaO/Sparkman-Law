import React from "react"
import styled from "styled-components"

const StyledAddress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 20%;
  margin-top: 10%;
  margin-bottom: 10px;
  letter-spacing: 1px;
  color: ${props => (props.secondary ? "black" : "white")};
`
export const Address = props => {
  return (
    <StyledAddress secondary={props.secondary}>
      Sparkman Law Firm PLLC
      <br />
      2928 N McKee Circle
      <br />
      Suite 121
      <br />
      Fayetteville, AR 72703
    </StyledAddress>
  )
}
