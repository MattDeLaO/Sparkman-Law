import React from "react"
import styled from "styled-components"
import MainLayout from "../components/MainLayout"
import StyledBackgroundSection from "../components/StyledBackgroundSection"
import {
  Address,
  Header,
  PhoneNumberSection,
  Section,
  ScheduleConsultation,
  StyledBulletList,
  Table,
  Text,
} from "../components/index.js"
import SEOComponent from "../components/SEOComponent"
import { FcApproval } from "react-icons/fc"
import { MdGavel } from "react-icons/md"

const ServicesSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding-right: 5%;
  padding-left: 5%;
  padding-bottom: 12%;
  font-size: 2em;
  background: white;
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
    z-index: 3;
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
    z-index: ${props => props.zIndex};
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
  margin-top: 0;
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
const BackToTop = styled.a`
  color: white;
  border-bottom: 1px solid;
  border-right: 0px;
  border-left: 0px;
  border-top: 0px;
  border-image: linear-gradient(45deg, orange, red) 1;
  padding: 2%;
  letter-spacing: 4px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  margin: 20px;
  @media screen and (min-width: 320px) {
    font-size: 8px;
  }
  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
  @media screen and (min-width: 1224px) {
    font-size: 12px;
  }
`

const PhoneNumber = styled.a`
  color: white;
  text-decoration: none;
  display: inline;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  :hover {
    color: blue;
  }
`
const IndexPage = () => {
  return (
    <MainLayout>
      <SEOComponent title="Sparkman Law Homepage" />
      <Header id="Top" />
      <StyledBackgroundSection />
      <ServicesSection id="Services">
        <ScheduleConsultation />
        <Section title="Services" primary>
          <ServicesContentWrapper>
            <Table>
              <tbody>
                <tr>
                  <th>Criminal</th>
                </tr>
                <tr>
                  <td>DWI and Other Alcohol Crimes</td>
                </tr>
                <tr>
                  <td>Drug Cases</td>
                </tr>
                <tr>
                  <td>Battery and Other Crimes Against Persons</td>
                </tr>
                <tr>
                  <td>Theft and Other Property Crimes</td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <tbody>
                <tr>
                  <th>Traffic</th>
                </tr>
                <tr>
                  <td>Speeding</td>
                </tr>
                <tr>
                  <td>Reckless and Careless Driving</td>
                </tr>
                <tr>
                  <td>Suspended Drivers License</td>
                </tr>
                <tr>
                  <td>CDL Offenses</td>
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
      <BlackSection id="About" zIndex={2}>
        <Section title="About">
          <Text>
            Sarah Sparkman is a former prosecutor, skilled trial attorney, and
            fierce advocate for her clients. She has been representing clients
            in Arkansas for more than a decade. Part of what she has done during
            her career:
          </Text>
          <StyledBulletList
            icon={<MdGavel size={30} style={{ color: "#FF5400" }} />}
            listData={[
              "Personally prosecute more than 8,000 criminal and traffic cases",
              "Try – and win - cases in Circuit and District Courts throughout Arkansas",
              "Teach classes on traffic stops and investigations ",
              "Testify before the state legislature regarding criminal law",
            ]}
          />
          <Text>
            Hiring an attorney is an investment of time, money, and trust, and
            Sarah takes her responsibility to her clients seriously. Sarah
            provides zealous representation and individual attention to each of
            her clients so that together, they can reach the best resolution
            possible
          </Text>
          <Text>
            Have you been charged with a crime or traffic offense? Contact
            Sparkman Law Firm for a free consultation at <PhoneNumber href="tel: +1- 479-430-2701">(479) 430-2701</PhoneNumber>.
          </Text>
        </Section>
      </BlackSection>
      <WhiteSection id="WhySparkmanLaw">
        <Section title="Why Sparkman Law Firm?" primary>
          <Text secondary>
            If you’re in a situation where you need to hire an attorney, it’s
            likely you’re not having a great day. Sparkman Law Firm offers you
            the following to ease your worries:
          </Text>
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
      <BlackSection id="Contact" zIndex={4}>
        <Section title="Contact">
          <Text>
            Have a criminal, traffic, or local law issue? Contact Sparkman Law
            Firm for a consultation today.
          </Text>
          <ScheduleConsultation />
          <Address />
          <PhoneNumberSection secondary />
          <Disclaimer>
            Viewing this website does not form an attorney/client relationship
            between you and the attorneys of Sparkman Law Firm PLLC. No
            attorney/client relationship occurs unless and until you sign an
            agreement confirming the nature and scope of representation. This
            website is for informational purposes only and does not contain
            legal advice. Please do not act or refrain from acting based on
            anything you read on this site.
          </Disclaimer>
          <BackToTop href="#Top">Back To Top</BackToTop>
        </Section>
      </BlackSection>
    </MainLayout>
  )
}

export default IndexPage
