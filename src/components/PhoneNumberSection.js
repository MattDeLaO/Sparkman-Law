import React from "react"
import styled from "styled-components"

const PhoneNumber = styled.a`
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  :hover {
    color: blue;
  }
`
const PhoneNumberWrapper = styled.div`
  margin-top: 10%;
  margin-bottom: 10%;
  display: flex;
  color: ${props => props.secondary ? 'white' : 'black'};
  a {
    text-decoration: none;
    color: inherit;
  }
`

export const PhoneNumberSection = props => {
  return (
    <PhoneNumberWrapper secondary={props.secondary}>
      <PhoneNumber href="tel: +1- 479-430-2701">479-430-2701</PhoneNumber>
    </PhoneNumberWrapper>
  )
}
