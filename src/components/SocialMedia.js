import React from 'react'
import { FiTwitter, FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";
import styled from 'styled-components'

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
`
const SocialMediaIcons = styled.a`
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
border-radius: 10px;
background-image: linear-gradient(to right, #FFE270 0%, #FF8233 50%, #ff6300 100%);
background-size: 200% auto;
transition: 0.2s;
padding: 10px;
margin: 5px;
color: #292929;
cursor: pointer;
box-shadow: 0 0 20px #eee;
:hover {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  background-position: left center;
  color: white;
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
        <SocialMediaIcons>
          <FiTwitter size={20} />
        </SocialMediaIcons>
        <SocialMediaIcons>
          <FiFacebook size={20} />
        </SocialMediaIcons>
        <SocialMediaIcons>
          <FiInstagram size={20} />
        </SocialMediaIcons>
        <SocialMediaIcons>
          <FiLinkedin size={20} />
        </SocialMediaIcons>
      </SocialMediaLinksSection>
      <PhoneNumberSection>
        <a href="tel: +1-479-867-5309">+1-479-867-5309</a>
      </PhoneNumberSection>
    </ContactSection>
  )
}
