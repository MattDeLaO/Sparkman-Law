import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Img from 'gatsby-image'
import { SocialMedia } from '../components/SocialMedia'
import {StyledContactLink } from '../components/StyledContactLink'

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  max-width: 95%;
  margin-top: 2%;
  margin-bottom: 2%;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  text-shadow: 3px 3px 3px black;
  border-bottom: 1px solid;
  border-right: 0px;
  border-left: 0px;
  border-top: 0px;
  border-image: linear-gradient(45deg, red, orange) 1;
  @media screen and (min-width: 320px) {
    font-size: 1.5em;
  }
  @media screen and (min-width: 768px) {
    font-size: 4em;
  }
  @media screen and (min-width: 1224px) {
    font-size: 4em;
  }
`
const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 10%;
`

const ImageWrapper = styled.div`
  @media screen and (min-width: 320px) {
    width: 30%;
  }
  @media screen and (min-width: 768px) {
    width: 20%;
  }
  @media screen and (min-width: 1224px) {
    width: 10%;
  }
`

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "HeroImage.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        logo: file(relativePath: { eq: "SparkmanLogo.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const background = data.desktop.childImageSharp.fluid
  const logo = data.logo.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={background}
    >
      <CTASection>
        <ImageWrapper>
          <Img fluid={logo} alt="" />
        </ImageWrapper>
        <Title>Sparkman Law Firm PLLC</Title>
        <StyledContactLink />
        <SocialMedia />
      </CTASection>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-position: 50% 20%;
  background-size: cover;
`

export default StyledBackgroundSection
