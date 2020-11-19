import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { FiMenu, FiX } from "react-icons/fi";
import { useSpring, animated } from 'react-spring';
import { SocialMedia } from './SocialMedia';

const DesktopView = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
@media screen and (min-width: 320px) {
  display: none;
}
@media screen and (min-width: 768px) {
  display: none;
}
@media screen and (min-width: 1224px) {
  display: flex;
}
`
const HeaderWrapper = styled.div`
display: flex;
min-height: 12vh;
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
export const Menu = styled.button`
    position: absolute;
    color: black;
    background: white;
    right: 3vw;
    padding: 2px;
    &:active {
      border: none;
    }
  `

const MobileView = styled.div`
display: flex;
align-items: center;
@media screen and (min-width: 320px) {
  display: flex;
}
@media screen and (min-width: 768px) {
  display: flex;
}
@media screen and (min-width: 1224px) {
  display: none;
}
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
  padding: 15px;
  box-shadow: 0 6px 6px rgba(0,0,0,0.15);
  background: white;
  cursor: pointer;
  color: black;
}
:active {
  background-color: #D6D6D6;
  color: white;
  box-shadow: 0 0 0;
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
text-decoration: none;
:hover {
  box-shadow: 0 6px 6px rgba(0,0,0,0.2);
  padding: 15px;
  cursor: pointer;
}
:active {
  background-color: #D6D6D6;
  color: white;
  box-shadow: 0 0 0;
}
`
export const NavLinkList = styled.div`
    display: flex;
    position: absolute;
    height: 75vh;
    top: 12vh;
    right: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-width: 65vw;
    background: white;
    border-left: 1px solid #494949;
    border-bottom: 1px solid #494949;
    border-bottom-left-radius: 5px;
    -webkit-box-shadow: -4px 4px 5px -1px rgba(0,0,0,0.37);
    -moz-box-shadow: -4px 4px 5px -1px rgba(0,0,0,0.37);
    box-shadow: -4px 4px 5px -1px rgba(0,0,0,0.37);
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
  const [isOpen, setNavState] = useState(false);
  const handleOnClick = () => {
    setNavState(isOpen => !isOpen)
  }
  const animateProps = useSpring({ opacity: 1, from: { opacity: 0 } })
  const SitePages = links.site.siteMetadata.menuLinks;
  return (
    <HeaderWrapper>
      <DesktopView>
        <Logo>Sparkman Law</Logo>
        <Links>
          {
            SitePages.map(page => (
              page.name === 'Contact'
                ? <StyledContactLink>Contact</StyledContactLink>
                : (
                  <StyledLink to={page.link} id={page.name}>
                    {page.name}
                  </StyledLink>
                )
            ))
          }
        </Links>
        <SocialMedia />
      </DesktopView>
      <MobileView>
        Sparkman Law
        <Menu>
          {
            isOpen
              ? <div><FiX size={30} onClick={handleOnClick} /></div>
              : <div><FiMenu size={30} onClick={handleOnClick} /></div>
          }
        </Menu>
        {
          isOpen && (
            <NavLinkList>
              {
            SitePages.map(page => (
              page.name === 'Contact'
                ? <StyledContactLink>Contact</StyledContactLink>
                : (
                  <StyledLink to={page.link} id={page.name}>
                    { page.name }
                  </StyledLink>
                )
            ))
          }
              <SocialMedia />
            </NavLinkList>
          )
        }
      </MobileView>
    </HeaderWrapper>
  )
}
