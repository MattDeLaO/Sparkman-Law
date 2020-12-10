import React, {useRef, useState, useEffect} from "react"
import styled from "styled-components"

const TableWrapper = styled.table`
  border: 1px solid black;
  margin: 10px;
  max-width: 95%;
  color: black;
  border: 3px solid;
  border-image: linear-gradient(45deg, orange, red) 1;
  -webkit-box-shadow: -4px 4px 5px -1px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: -4px 4px 5px -1px rgba(0, 0, 0, 0.37);
  box-shadow: -4px 4px 5px -1px rgba(0, 0, 0, 0.37);
  text-align: center;
  visibility: ${props => (props.isVisible ? "visible" : "hidden")};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity 1s ease-out;
  will-change: opacity, visibility;
  transition-delay: 200ms;
  th {
    background: black;
    color: white;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 5px;
  }
  td {
    padding: 15px;
    font-size: 14px;
  }
`
export const Table = ({ children }) => {
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
    <TableWrapper ref={domRef} isVisible={isVisible}>
      {children}
    </TableWrapper>
  )
}
