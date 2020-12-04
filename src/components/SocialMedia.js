import React from "react"
import { FiTwitter, FiInstagram, FiYoutube, FiFacebook } from "react-icons/fi"
import styled from "styled-components"

const PhoneNumber = styled.a`
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: blue;
  }
`
const PhoneNumberSection = styled.div`
  display: flex;
  a {
    text-decoration: none;
    color: inherit;
  }
`
const SocialMediaIcons = styled.a`
  position: relative;
  border: 4px solid transparent;
  border-radius: 16px;
  background: black;
  background-clip: padding-box;
  color: white;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 0 20px #eee;
  margin: 5px;
  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  :after {
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    background: linear-gradient(45deg, orange, red);
    content: "";
    z-index: -1;
    border-radius: 16px;
  }
`
const SocialMediaLinksSection = styled.div`
  display: flex;
`
const ContactSection = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 10px;
`
export const SocialMedia = () => {
  return (
    <ContactSection>
      <SocialMediaLinksSection>
        <SocialMediaIcons
          href="https://twitter.com/sparkmanlaw"
          target="_blank"
        >
          <FiTwitter size={30} />
        </SocialMediaIcons>
        <SocialMediaIcons
          href="https://Facebook.com/sparkmanlawnwa"
          target="_blank"
        >
          <FiFacebook size={30} />
        </SocialMediaIcons>
        <SocialMediaIcons
          href="https://instagram.com/sarahsparkmanlaw"
          target="_blank"
        >
          <FiInstagram size={30} />
        </SocialMediaIcons>
        <SocialMediaIcons
          href="https://www.youtube.com/channel/UCbCDnEUTR17DtK6akCjEyNw"
          target="_blank"
        >
          <FiYoutube size={30} />
        </SocialMediaIcons>
      </SocialMediaLinksSection>
      <PhoneNumberSection>
        <PhoneNumber href="tel: +1- 479-430-2701">479-430-2701</PhoneNumber>
      </PhoneNumberSection>
    </ContactSection>
  )
}
