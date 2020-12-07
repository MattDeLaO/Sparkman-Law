import React from 'react'
import styled from 'styled-components'

const ContactLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6px;
  padding: 10px;
  letter-spacing: 2px;
  border: 2px solid #494949;
  border-radius: 2px;
  background: black;
  color: white;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.05);
  transition: 0.2s;
  text-decoration: none;
  text-transform: uppercase;
  a {
    text-decoration: none;
    color: inherit;
  }
  :hover {
    padding: 15px;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.15);
    background: white;
    cursor: pointer;
    color: black;
  }
  :active {
    background-color: #d6d6d6;
    color: white;
    box-shadow: 0 0 0;
  }
  @media screen and (min-width: 320px) {
    font-size: 1em;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5em;
  }
  @media screen and (min-width: 1224px) {
    font-size: 1.4em;
  }
`
export const StyledContactLink = () => {
    return (
        <ContactLink href="#Contact">Contact</ContactLink>
    )
}
