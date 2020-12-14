import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

const StyledText = styled.p`
  visibility: ${props => (props.isVisible ? "visible" : "hidden")};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity 1s ease-out;
  will-change: opacity, visibility;
  transition-delay: 255ms;
  color: ${props => props.secondary ? 'black' : 'white'};
  margin-bottom: 10px;
`
export const Text = props => {
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
    <StyledText ref={domRef} isVisible={isVisible} secondary={props.secondary}>
      {props.children}
    </StyledText>
  )
}
