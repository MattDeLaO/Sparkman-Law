import React from "react"
import { FiTwitter, FiInstagram, FiYoutube, FiFacebook } from "react-icons/fi"
import styled from "styled-components"

const SocialMediaIcons = styled.a`
  position: relative;
  border: 4px solid transparent;
  border-radius: 16px;
  background: black;
  background-clip: padding-box;
  color: white;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 5px;
  :hover {
    box-shadow: 0 0 20px #eee;
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
export const SocialMedia = () => {
  return (
      <SocialMediaLinksSection>
        <SocialMediaIcons
          href="https://twitter.com/sparkmanlaw"
          target="_blank"
        >
          <FiTwitter size={20} />
        </SocialMediaIcons>
        <SocialMediaIcons
          href="https://Facebook.com/sparkmanlawnwa"
          target="_blank"
        >
          <FiFacebook size={20} />
        </SocialMediaIcons>
        <SocialMediaIcons
          href="https://instagram.com/sarahsparkmanlaw"
          target="_blank"
        >
          <FiInstagram size={20} />
        </SocialMediaIcons>
        <SocialMediaIcons
          href="https://www.youtube.com/channel/UCbCDnEUTR17DtK6akCjEyNw"
          target="_blank"
        >
          <FiYoutube size={20} />
        </SocialMediaIcons>
      </SocialMediaLinksSection>
  )
}
