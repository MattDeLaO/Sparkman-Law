import React from "react"
import styled from 'styled-components'
import { Layout } from '../components/Layout'
import { Header } from '../components/Header'
import Gavel from '../images/gavel2.jpg';

export const Parallax = styled.div`
display: flex;
flex-direction: column;
min-height: 88vh;
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

const IndexPage = () => (
  <Layout>
    <Header />
    <Parallax img={Gavel} opacity={.3}>

    </Parallax>
  </Layout>
)

export default IndexPage
