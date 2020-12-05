import React from "react"
import styled from "styled-components"

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
const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  border: 3px solid;
  border-image: linear-gradient(45deg, orange, red) 1;
  padding: 3%;
  color: ${props => (props.primary ? "black" : "white")};
  -webkit-box-shadow: -4px 4px 5px -1px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: -4px 4px 5px -1px rgba(0, 0, 0, 0.37);
  box-shadow: -4px 4px 5px -1px rgba(0, 0, 0, 0.37);
`
export const StyledBulletList = ({ icon, listData, primary }) => {
  return (
    <StyledList primary={primary}>
      {listData.map((text, index) => (
        <StyledBulletPoint key={index}>
          {icon && <StyledIcon>{icon}</StyledIcon>}
          {text}
        </StyledBulletPoint>
      ))}
    </StyledList>
  )
}
