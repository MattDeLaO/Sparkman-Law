import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  visibility: ${props => (props.isVisible ? "visible" : "hidden")};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity 1s ease-out;
  will-change: opacity, visibility;
  transition-delay: 200ms;
  z-index: 99;
`
const SectionTitle = styled.h2`
  border: 3px solid;
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
  visibility: ${props => (props.isVisible ? "visible" : "hidden")};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity 1s ease-out;
  will-change: opacity, visibility;
  transition-delay: 200ms;
`
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
  visibility: ${props => (props.isVisible ? "visible" : "hidden")};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity 1s ease-out;
  will-change: opacity, visibility;
  transition-delay: 200ms;
  p {
    margin-bottom: 2%;
  }
`
export const Section = props => {
  const domRef = useRef()
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true)
        // No need to keep observing:
        observer.unobserve(domRef.current)
      }
    })

    observer.observe(domRef.current)

    return () => observer.unobserve(domRef.current)
  }, [])

  return (
    <SectionWrapper ref={domRef} isVisible={isVisible}>
      <SectionTitle ref={domRef} isVisible={isVisible} primary={props.primary}>
        {props.title}
      </SectionTitle>
      <Content ref={domRef} isVisible={isVisible}>
        {props.children}
      </Content>
    </SectionWrapper>
  )
}
