import React from "react"
import styled from "styled-components"
import { FcCalendar } from "react-icons/fc"

const ScheduleConsultationWrapper = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  position: relative;
  border: 4px solid transparent;
  border-radius: 10px;
  background: black;
  color: white;
  background-clip: padding-box;
  padding: 10px;
 
  margin: 2%;
  text-transform: uppercase;
  :after {
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    background: linear-gradient(45deg, red, orange);
    content: "";
    z-index: -1;
    border-radius: 10px;
  }
  @media screen and (min-width: 320px) {
    font-size: .6em;
  }
  @media screen and (min-width: 768px) {
    font-size: .7em;
  }
  @media screen and (min-width: 1224px) {
    font-size: 1em;
  }
`
const StyledCalendarIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`

export const ScheduleConsultation = () => {
  return (
    <ScheduleConsultationWrapper href="https://sparkman-law-firm-pllc.clientrock.app/book/consultation" target="_blank">
      <StyledCalendarIcon>
        <FcCalendar size={35} />
      </StyledCalendarIcon>
      Schedule a Free Consultation
    </ScheduleConsultationWrapper>
  )
}
