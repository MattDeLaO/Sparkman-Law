import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import MainLayout from "../components/MainLayout"
import { Header } from "../components/Header"
import Gavel from "../images/gavel2.jpg"
import { FcApproval } from "react-icons/fc"
import { MdGavel } from "react-icons/md"
import { BulletPoint } from "../components/BulletPoint"
import { ScheduleConsultation } from "../components/ScheduleConsultation"

const Content = styled.div`
  display: flex;
  flex-direction: ${props => (props.secondary ? "row" : "column")};
  align-items: center;
  justify-content: center;
  padding-right: 2%;
  padding-left: 2%;
  color: ${props => (props.primary ? "black" : "white")};
  z-index: 10;
  min-height: 60vh;
  p {
    margin-bottom: 2%;
  }
`
const ServicesContent = styled(Content)`
  align-items: flex-start;
  @media screen and (min-width: 320px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1224px) {
    flex-direction: row;
  }
`
export const Parallax = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  ::before {
    content: " ";
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(${props => props.img});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    z-index: -1;
    opacity: ${props => (props.opacity ? props.opacity : 0.6)};
  }
`
const ServicesSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding-right: 5%;
  padding-left: 5%;
  padding-bottom: 12%;
  position: relative;
  font-size: 2em;
  background: white;
  :after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    background: inherit;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform-origin: top left;
    transform: skewY(-10deg);
  }
  :before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    background: inherit;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform-origin: top right;
    transform: skewY(10deg);
  }
  @media screen and (min-width: 320px) {
    font-size: 1em;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5em;
  }
  @media screen and (min-width: 1224px) {
    font-size: 2em;
  }
`
const WhiteSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5%;
  padding-bottom: 12%;
  position: relative;
  background: white;
  font-size: 2em;
  min-height: 35vh;
  position: relative;
  :before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    background: inherit;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform-origin: top left;
    transform: skewY(-5deg);
  }
  @media screen and (min-width: 320px) {
    font-size: 1em;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5em;
  }
  @media screen and (min-width: 1224px) {
    font-size: 2em;
  }
`
const BlackSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10%;
  position: relative;
  font-size: 2em;
  background: black;
  min-height: 35vh;
  position: relative;
  background-image: url(${props => props.img});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  :before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    background: inherit;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform-origin: bottom right;
    transform: skewY(5deg);
  }
  @media screen and (min-width: 320px) {
    font-size: 1em;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5em;
  }
  @media screen and (min-width: 1224px) {
    font-size: 2em;
  }
`
const Spacer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 60vh;
  margin-bottom: 5%;
  width: 100%;
  padding-top: 5%;
  position: relative;
  z-index: 1;
`
const SectionTitle = styled.h2`
  border: 4px solid;
  border-image: linear-gradient(45deg, orange, red) 1;
  padding: 2%;
  letter-spacing: 4px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${props => (props.primary ? "black" : "white")};
  z-index: 10;
`
const ImageWrapper = styled.div`
  -webkit-box-shadow: -4px 4px 5px -1px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: -4px 4px 5px -1px rgba(0, 0, 0, 0.37);
  box-shadow: -4px 4px 5px -1px rgba(0, 0, 0, 0.37);

  @media screen and (min-width: 320px) {
    width: 95%;
  }
  @media screen and (min-width: 768px) {
    with: 70%;
  }
  @media screen and (min-width: 1224px) {
    width: 45%;
  }
`
const Table = styled.table`
  text-align: center;
  text-transform: uppercase;
  -webkit-box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.35);
  letter-spacing: 1px;
  margin: 10px;
  tr {
    border-bottom: 1px solid black;
    :hover {
      font-weight: 900;
    }
  }
  td {
    padding: 15px;
    color: black;
  }
  tr:nth-child(even) {
    background: white;
  }
  tr:nth-child(odd) {
    background: #f9f9f9;
  }
  th {
    border: 4px solid;
    border-image: linear-gradient(45deg, orange, red) 1;
    margin-bottom: 10px;
    padding: 25px;
    background: black;
    color: white;
    font-weight: 900;
  }
`
const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 5px solid;
  border-image: linear-gradient(45deg, orange, red) 1;
  padding: 3%;
`

const IndexPage = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Lawyer.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <MainLayout>
      <Parallax img={Gavel} opacity={0.3}>
        <Header />
        <Spacer>
          <ImageWrapper>
            <Img fluid={image.file.childImageSharp.fluid} alt="" />
          </ImageWrapper>
        </Spacer>

        <ServicesSection id="Services">
          <ScheduleConsultation />
          <SectionTitle primary>Services</SectionTitle>
          <ServicesContent secondary>
            <Table>
              <tbody>
                <tr>
                  <th>Criminal & Traffic</th>
                </tr>
                <tr>
                  <td>DWI</td>
                </tr>
                <tr>
                  <td>Drug Cases</td>
                </tr>
                <tr>
                  <td>Battery and Assault</td>
                </tr>
                <tr>
                  <td>Suspended Drivers License</td>
                </tr>
                <tr>
                  <td>Speeding</td>
                </tr>
                <tr>
                  <td>Reckless and Careless Driving</td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <tbody>
                <tr>
                  <th>Local Law</th>
                </tr>
                <tr>
                  <td>Ordinance Violations</td>
                </tr>
                <tr>
                  <td>Eminent Domain</td>
                </tr>
                <tr>
                  <td>Rezoning and Variance Requests</td>
                </tr>
                <tr>
                  <td>Administrative Hearings</td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <tbody>
                <tr>
                  <th>Landlord/Tenant</th>
                </tr>
                <tr>
                  <td>Unlawful Detainer/Evictions</td>
                </tr>
                <tr>
                  <td>Eviction Notices</td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <tbody>
                <tr>
                  <th>A La Carte</th>
                </tr>
                <tr>
                  <td>Legal Plans for Domestic Violence Victims</td>
                </tr>
                <tr>
                  <td>Divorce Paperwork</td>
                </tr>
                <tr>
                  <td>Responses to Lawsuits</td>
                </tr>
                <tr>
                  <td>Court Appearance Coaching</td>
                </tr>
                <tr>
                  <td>Document Review</td>
                </tr>
              </tbody>
            </Table>
          </ServicesContent>
        </ServicesSection>
        <BlackSection id="About">
          <SectionTitle>About</SectionTitle>
          <Content>
            <p>
              Sarah Sparkman has been representing clients in Arkansas for more
              than a decade. When Sarah takes on your case, she knows that
              you’re trusting her to fight for you.
            </p>
            <p>
              Sarah’s legal experience is unparalleled in Northwest Arkansas.
              Part of what she has done:
            </p>
            <StyledList>
              <BulletPoint
                icon={<MdGavel size={30} style={{ color: "#8BC34A" }} />}
                text=" Personally handle more than 5,000 criminal and traffic cases in
                the last 5 years alone"
              />
              <BulletPoint
                icon={<MdGavel size={30} style={{ color: "#8BC34A" }} />}
                text="Take on big banks and unethical landlords who attempted to
                illegally remove families from their homes"
              />
              <BulletPoint
                icon={<MdGavel size={30} style={{ color: "#8BC34A" }} />}
                text="Work closely with state legislators to pass bills to protect
                victims of domestic violence"
              />
              <BulletPoint
                icon={<MdGavel size={30} style={{ color: "#8BC34A" }} />}
                text="Advise city government officials including planners, city
                council members, and police officers, on legal matters"
              />
              <BulletPoint
                icon={<MdGavel size={30} style={{ color: "#8BC34A" }} />}
                text="Teach legal topics and physical training at the Northwest
                Arkansas Law Enforcement Training Academy"
              />
              <BulletPoint
                icon={<MdGavel size={30} style={{ color: "#8BC34A" }} />}
                text="Try cases in Circuit and District Courts throughout the state of
                Arkansas."
              />
            </StyledList>
            <p>
              In addition to fighting for her clients, Sarah is a sought out
              speaker in the state of Arkansas on the topics of social media and
              attorney ethics, mental health issues and public service.
            </p>
            <p>
              Sarah is a proud graduate of the University of Arkansas and the
              Arkansas School for Mathematics and Sciences. She lives in
              Fayetteville with her husband and their two rescue dogs. An avid
              fan of the Kansas City Royals, Sarah was named as a must-follow on
              Twitter for the Major League Baseball postseason by the Sporting
              News.
            </p>
            <p>
              Have a criminal, traffic, or local law issue? Contact Sparkman Law
              Firm for a consultation today.
            </p>
          </Content>
        </BlackSection>
        <WhiteSection id="WhySparkmanLaw">
          <SectionTitle primary>Why Sparkman Law Firm?</SectionTitle>
          <Content primary>
            <p>
              If you’re in a situation where you need to hire an attorney, it’s
              likely you’re not having a great day. Sparkman Law Firm offers you
              the following to ease your worries:
            </p>
            <StyledList>
              <BulletPoint
                icon={<FcApproval />}
                text="Representation by an attorney with unparalleled legal experience
                in Northwest Arkansas"
              />
              <BulletPoint
                icon={<FcApproval />}
                text="Updates on the progress of your case"
              />
              <BulletPoint
                icon={<FcApproval />}
                text="Honest, straightforward advice"
              />
              <BulletPoint
                icon={<FcApproval />}
                text="Secure online communication that works with YOUR schedule"
              />
              <BulletPoint
                icon={<FcApproval />}
                text="Use of technology to save you time and travel"
              />
              <BulletPoint
                icon={<FcApproval />}
                text="Flat fee representation with payment plans"
              />
            </StyledList>
          </Content>
        </WhiteSection>
        <BlackSection id="Contact">
          <SectionTitle>Contact</SectionTitle>
          <Content>
            <p>
              Have a criminal, traffic, or local law issue? Contact Sparkman Law
              Firm for a consultation today.
            </p>
            <ScheduleConsultation />
          </Content>
        </BlackSection>
      </Parallax>
    </MainLayout>
  )
}

export default IndexPage
