import React from "react"
import styled from "styled-components"

const SectionWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
text-align: center;
`
const SectionTitle = styled.h2`
  border: 3px solid;
  border-image: linear-gradient(45deg, orange, red) 1;
  padding: 2%;
  letter-spacing: 4px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${props => (props.primary ? "black" : "white")};
  z-index: 10;
`
const Content = styled.div`
  display: flex;
  flex-direction: ${props => (props.secondary ? "row" : "column")};
  align-items: center;
  justify-content: center;
  padding-right: 2%;
  padding-left: 2%;
  color: ${props => (props.primary ? "black" : "white")};
  z-index: 10;
  min-height: 60vh;
  p {
    margin-bottom: 2%;
  }
`
export const Section = props => {
  return (
    <SectionWrapper>
      <SectionTitle primary={props.primary}>{props.title}</SectionTitle>
      <Content>{props.children}</Content>
    </SectionWrapper>
  )
}
