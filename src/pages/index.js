import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import MainLayout from '../components/MainLayout'
import {
  Header,
  ScheduleConsultation,
  Table,
  Section,
  StyledBulletList,
} from "../components"
import { FcApproval } from "react-icons/fc"
import Sparks from "../images/SparksBackground.jpg"
import { MdGavel } from "react-icons/md"

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
    @media screen and (min-width: 320px) {
    }
    @media screen and (min-width: 768px) {
      background-position: 0% 80%;
    }
    @media screen and (min-width: 1224px) {
      background-position: 0% 30%;
    }
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
const ServicesContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 96vw;
  height: 100%;
  @media screen and (min-width: 320px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 1224px) {
    flex-direction: row;
    align-items: flex-start;
  }
`
const Spacer = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5%;
  width: 100%;
  position: relative;
  z-index: 1;
`
const Disclaimer = styled.p`
  max-width: 80%;
  text-align: center;
  @media screen and (min-width: 320px) {
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1224px) {
    font-size: 16px;
  }
`
const ImageWrapper = styled.div`
  height: 20%;
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
const IndexPage = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Sarah1.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <MainLayout>
      <Parallax img={Sparks} opacity={0.3}>
        <Header />
        <Spacer>
          <ImageWrapper>
            <Img fluid={image.file.childImageSharp.fluid} />
          </ImageWrapper>
        </Spacer>
        <ServicesSection id="Services">
          <ScheduleConsultation />
          <Section title="Services" primary>
            <ServicesContentWrapper>
              <Table>
                <tbody>
                  <tr>
                    <th>Criminal and Traffic</th>
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
            </ServicesContentWrapper>
          </Section>
        </ServicesSection>
        <BlackSection id="About">
          <Section title="About">
            <p>
              Sarah Sparkman has been representing clients in Arkansas for more
              than a decade. When Sarah takes on your case, she knows that
              you’re trusting her to fight for you.
            </p>
            <p>
              Sarah’s legal experience is unparalleled in Northwest Arkansas.
              Part of what she has done:
            </p>
            <StyledBulletList
              icon={<MdGavel size={30} style={{ color: "#FF5400" }} />}
              listData={[
                "Personally prosecute more than 8,000 criminal and traffic cases",
                "Take on big banks and unethical landlords who attempted to illegally remove families from their homes",
                "Work closely with state legislators to pass bills to protect victims of domestic violence",
                "Advise city government officials including planners, city council members, and police officers, on legal matters",
                "Teach legal topics and physical training at the Northwest Arkansas Law Enforcement Training Academy",
                "Try cases in Circuit and District Courts throughout the state of Arkansas.",
              ]}
            />
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
          </Section>
        </BlackSection>
        <WhiteSection id="WhySparkmanLaw">
          <Section title="Why Sparkman Law Firm?" primary>
            <p>
              If you’re in a situation where you need to hire an attorney, it’s
              likely you’re not having a great day. Sparkman Law Firm offers you
              the following to ease your worries:
            </p>
            <StyledBulletList
              icon={<FcApproval size={40} />}
              listData={[
                "Representation by an attorney with unparalleled legal experience in Northwest Arkansas",
                "Updates on the progress of your case",
                "Honest, straightforward advice",
                "Secure online communication that works with YOUR schedule",
                "Use of technology to save you time and travel",
                "Flat fee representation with payment plans",
              ]}
              primary
            />
          </Section>
        </WhiteSection>
        <BlackSection id="Contact">
          <Section title="Contact">
            <p>
              Have a criminal, traffic, or local law issue? Contact Sparkman Law
              Firm for a consultation today.
            </p>
            <ScheduleConsultation />
            <Disclaimer>
              Viewing this website does not form an attorney/client
              relationshiDisclaimer between you and the attorneys of Sparkman
              Law Firm PLLC. No attorney/client relationship occurs unless and
              until you sign an agreement confirming the nature and scope of
              representation. This website is for informational purposes only
              and does not contain legal advice. Please do not act or refrain
              from acting based on anything you read on this site.
            </Disclaimer>
          </Section>
        </BlackSection>
      </Parallax>
    </MainLayout>
  )
}

export default IndexPage
