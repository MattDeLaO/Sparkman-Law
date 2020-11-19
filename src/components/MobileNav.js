import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { AnimatePresence, motion } from 'framer-motion';
import { ContactInfo } from './ContactInfo';

export const NavLinkList = styled(motion.div)`
    display: flex;
    position: absolute;
    height: 90vh;
    top: 10vh;
    right: 3vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 65vw;
    background: #021E33;
    border-left: 3px solid #043B64;
    border-bottom: 3px solid #043B64;
    border-bottom-left-radius: 5px;
    -webkit-box-shadow: -4px 4px 5px -1px rgba(0,0,0,0.37);
    -moz-box-shadow: -4px 4px 5px -1px rgba(0,0,0,0.37);
    box-shadow: -4px 4px 5px -1px rgba(0,0,0,0.37);
  

@media screen and (min-width: 320px) {
  display: flex;
  right: 0;
}
@media screen and (min-width: 768px) {
  display: flex;
}
@media screen and (min-width: 1224px) {
  display: none;
}
  `

const MobileNavLink = styled(props => <Link {...props} />)`
align-items: center;
justify-content: center;
font-size: 15px;
text-align: center;
text-decoration: none;
color: white;
padding: 8px;
margin: 2px;
width: 100%;
`
const MobileNavBox = styled.div`
display: flex;
flex: 1;
flex-direction: column;
align-items: center;
width: 100%;
`
const LinkName = styled.div`
display: flex;
flex-direction: row;
padding: 10px;
justify-content: flex-start;
width: 100%;
`

export const MobileNav = MenuLinks => {
  console.log(MenuLinks)
  return (
    <AnimatePresence>
      <NavLinkList
        key="navlist"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ x: 100 }}
        transition={{ duration: .1 }}>
        <MobileNavBox style={{ justifyContent: 'flex-start' }}>
          {MenuLinks.map(link => (
            <MobileNavLink key={link.name} to={link.link}>
              <LinkName>
                {link.name}
              </LinkName>
            </MobileNavLink>
          ))}
        </MobileNavBox>
      </NavLinkList>
    </AnimatePresence>
  )
}
