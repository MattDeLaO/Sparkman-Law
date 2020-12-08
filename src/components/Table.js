import React from "react"
import styled from "styled-components"

const TableWrapper = styled.table`
  border: 1px solid black;
  margin: 10px;
  max-width: 90%;
  color: black;
  border: 3px solid;
  border-image: linear-gradient(45deg, orange, red) 1;
  -webkit-box-shadow: -4px 4px 5px -1px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: -4px 4px 5px -1px rgba(0, 0, 0, 0.37);
  box-shadow: -4px 4px 5px -1px rgba(0, 0, 0, 0.37);
  text-align: center;
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
  }
  @media screen and (min-width: 320px) {
    font-size: 12;
  }
  @media screen and (min-width: 768px) {
    font-size: 14;
  }
  @media screen and (min-width: 1224px) {
    font-size: 16;
  }
`
export const Table = ({ children }) =>  <TableWrapper>{children}</TableWrapper>
