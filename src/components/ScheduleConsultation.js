import React, { useState, useRef, useEffect } from "react"
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
  max-width: 75%;
  text-align: center;
  text-transform: uppercase;
  :after {
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    background: linear-gradient(45deg, red, orange);
    content: "";
    z-index: -10;
    border-radius: 10px;
  }
  @media screen and (min-width: 320px) {
    font-size: 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1224px) {
    font-size: 14px;
  }
  visibility: ${props => (props.isVisible ? "visible" : "hidden")};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity 1s ease-out;
  will-change: opacity, visibility;
  transition-delay: 255ms;
  -webkit-box-shadow: -4px 4px 5px -1px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: -4px 4px 5px -1px rgba(0, 0, 0, 0.37);
  box-shadow: -4px 4px 5px -1px rgba(0, 0, 0, 0.37);
  :hover {
    padding: 5px;
  }
`
const StyledCalendarIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`

export const ScheduleConsultation = () => {
  const domRef = useRef()
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        setVisible(true)
        // No need to keep observing:
        observer.unobserve(domRef.current)
      }
    })

    observer.observe(domRef.current)

    return () => observer.unobserve(domRef.current)
  }, [])

  return (
    <ScheduleConsultationWrapper
      href="https://sparkman-law-firm-pllc.clientrock.app/book/consultation"
      target="_blank"
      ref={domRef}
      isVisible={isVisible}
    >
      <StyledCalendarIcon>
        <FcCalendar size={35} />
      </StyledCalendarIcon>
      Schedule a Free Consultation
    </ScheduleConsultationWrapper>
  )
}
