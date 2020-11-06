import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { FiTwitter, FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi"; 

const HeaderWrapper = styled.div`
display: flex;
min-height: 10vh;
justify-content: space-evenly;
align-items: center;
color: black;
box-shadow: 0 0 5px rgba(0,0,0,0.19);
`
const Links = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
`
const Logo = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 20%;
`
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
const SocialMediaSection = styled.div`
display: flex;
height: 100%;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
margin-right: 10px;
`

const StyledContactLink = styled(props => <Link {...props} />)`
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
box-shadow: 0 5px 4px rgba(0,0,0,0.05);
transition: 0.2s;
text-transform: uppercase;
  a {
  text-decoration: none;
  color: inherit;
  }
:hover {
  box-shadow: 0 6px 6px rgba(0,0,0,0.15);
  background: white;
  color: black;
}
`
const StyledLink = styled(props => <Link {...props} />)`
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
padding: 10px;
letter-spacing: 2px;
border: 2px solid #494949;
border-radius: 2px;
color: black;
box-shadow: 0 5px 4px rgba(0,0,0,0.10);
transition: 0.2s;
text-transform: uppercase;
  a {
  text-decoration: none;
  color: inherit;
  }
:hover {
  box-shadow: 0 6px 6px rgba(0,0,0,0.2);
}
`
export const Header = () => {
  const links = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
            menuLinks {
              name
              link     
            }
          }
        }
      }
      `
  );
  
  const SitePages = links.site.siteMetadata.menuLinks;
  return (
    <HeaderWrapper>
        <Logo>Sparkman Law</Logo>
        <Links>
          {
            SitePages.map(page => (
            page.name === 'Contact'
              ? <StyledContactLink>Contact</StyledContactLink>
              : (
                <StyledLink to={page.StyledLink} id={page.name}>
                  {page.name}
                </StyledLink>
                )
            ))
          }
        </Links>
      <SocialMediaSection>
        <SocialMediaLinksSection>
          <SocialMediaIcons>
            <FiTwitter size={20}/>
          </SocialMediaIcons>
          <SocialMediaIcons>
            <FiFacebook size={20}/>
          </SocialMediaIcons>
          <SocialMediaIcons>
            <FiInstagram size={20}/>
          </SocialMediaIcons>
          <SocialMediaIcons>
            <FiLinkedin size={20}/>
          </SocialMediaIcons>
        </SocialMediaLinksSection> 
        <PhoneNumberSection>
          <PhoneNumber href="tel: +1-479-867-5309">+1-479-867-5309</PhoneNumber>
        </PhoneNumberSection>
      </SocialMediaSection>
      </HeaderWrapper>
  )
}
