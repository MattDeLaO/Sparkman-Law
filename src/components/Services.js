import React from "react"
import styled from "styled-components"
import { StyledBulletList } from "./StyledBulletList"

const ServicesListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`
const ServicesHeader = styled.h3`
border: 3px solid;
border-image: linear-gradient(45deg, orange, red) 1;
padding: 1%;
letter-spacing: 2px;
text-transform: uppercase;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background: black;
color: ${props => (props.primary ? "black" : "white")};
z-index: 10;
`
export const Services = props => {
  return (
    <ServicesListWrapper>
      <ServicesHeader>{props.header}</ServicesHeader>
      <StyledBulletList
        listData={props.listData}
        icon={props.icon}
        primary={props.primary}
      />
    </ServicesListWrapper>
  )
}
