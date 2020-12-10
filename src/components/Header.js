import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FiMenu, FiX } from "react-icons/fi"
import { PhoneNumberSection } from "./PhoneNumberSection"
import { ScheduleConsultation } from "./ScheduleConsultation"
import { motion } from "framer-motion"

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  min-height: 12vh;
  justify-content: space-evenly;
  align-items: center;
  color: white;
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
    display: flex;
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
  position: relative;
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
export const NavLinkList = styled(motion.div)`
  display: flex;
  position: absolute;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 40;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 50vw;
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
    }
  `)
  const [isOpen, setNavState] = useState(false)
  const handleOnClick = () => {
    setNavState(isOpen => !isOpen)
  }
  const SitePages = links.site.siteMetadata.menuLinks
  return (
    <HeaderWrapper>
      <MobileView>
        <Menu>
          {isOpen ? (
            <FiX size={30} onClick={handleOnClick} />
          ) : (
            <FiMenu size={30} onClick={handleOnClick} />
          )}
        </Menu>
        {isOpen && (
            <NavLinkList
              key="side-menu"
              animate={{ x: 0 }}
              initial={{ x: "100%" }}
              exit={{ x: "100%" }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            >
              <MobileNavContent>
                {SitePages.map(page =>
                  page.name === "Contact" ? (
                    <StyledContactLink href="#Contact" key={page.name}>
                      Contact
                    </StyledContactLink>
                  ) : (
                    <StyledLink href={`#${page.link}`} key={page.name}>
                      {page.name}
                    </StyledLink>
                  )
                )}

                <PhoneNumberSection />
                <ScheduleConsultation />
              </MobileNavContent>
            </NavLinkList>

        )}
      </MobileView>
    </HeaderWrapper>
  )
}
