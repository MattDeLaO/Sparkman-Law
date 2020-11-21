import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { FiMenu, FiX } from "react-icons/fi"
import { SocialMedia } from "./SocialMedia"

const DesktopView = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
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
const DesktopNavContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 80%;
  padding-right: 2%;
`
const HeaderWrapper = styled.div`
  display: flex;
  top: 0;
  positon: sticky;
  min-height: 12vh;
  justify-content: space-evenly;
  align-items: center;
  color: black;
`
const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  padding-right: 3%;
`
const Logo = styled.div`
  padding-left: 3%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 20%;
`
export const Menu = styled.button`
  position: absolute;
  color: black;
  background: rgba(255, 255, 255, 0.01);
  right: 3vw;
  padding: 2px;
  z-index: 100;
  outline: none;
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
const MobileNavContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75%;
`
const StyledContactLink = styled.a`
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
const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  letter-spacing: 2px;
  border: 2px solid #494949;
  border-radius: 2px;
  color: black;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
  text-transform: uppercase;
  text-decoration: none;
  :hover {
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
    padding: 15px;
    cursor: pointer;
    background: white;
  }
  :active {
    background: #d6d6d6;
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
    font-size: 1.2em;
  }
`
export const NavLinkList = styled.div`
  display: flex;
  position: absolute;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 99;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 65vw;
  background: white;
  border-bottom: 1px solid #494949;
  border-bottom-left-radius: 5px;
  -webkit-box-shadow: -4px 4px 5px -1px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: -4px 4px 5px -1px rgba(0, 0, 0, 0.37);
  box-shadow: -4px 4px 5px -1px rgba(0, 0, 0, 0.37);
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
      image: file(relativePath: { eq: "SparkmanLogoFull.png" }) {
        childImageSharp {
          fixed(width: 160, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const [isOpen, setNavState] = useState(false)
  const handleOnClick = () => {
    setNavState(isOpen => !isOpen)
  }
  const SitePages = links.site.siteMetadata.menuLinks
  return (
    <HeaderWrapper>
      <DesktopView>
        <Logo>
          <Img
            fixed={links.image.childImageSharp.fixed}
            imgStyle={{ objectFit: "contain" }}
          />
        </Logo>
        <DesktopNavContent>
          <Links>
            {SitePages.map(page =>
              page.name === "Contact" ? (
                <StyledContactLink href="#Contact">Contact</StyledContactLink>
              ) : (
                <StyledLink href={`#${page.link}`}>
                  {page.name}
                </StyledLink>
              )
            )}
          </Links>
          <SocialMedia />
        </DesktopNavContent>
      </DesktopView>
      <MobileView>
        <Img
          fixed={links.image.childImageSharp.fixed}
          imgStyle={{ objectFit: "contain" }}
        />
        <Menu>
          {isOpen ? (
            <FiX size={30} onClick={handleOnClick} />
          ) : (
            <FiMenu size={30} onClick={handleOnClick} />
          )}
        </Menu>
        {isOpen && (
          <NavLinkList>
            <MobileNavContent>
            {SitePages.map(page =>
              page.name === "Contact" ? (
                <StyledContactLink href="#Contact">Contact</StyledContactLink>
              ) : (
                <StyledLink href={`#${page.link}`}>
                  {page.name}
                </StyledLink>
              )
            )}
              <SocialMedia />
            </MobileNavContent>
          </NavLinkList>
        )}
      </MobileView>
    </HeaderWrapper>
  )
}