import React from "react"
import MainLayout from "../components/MainLayout"
import SEOComponent from '../components/SEOComponent'

const NotFoundPage = () => (
  <MainLayout>
    <SEOComponent title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </MainLayout>
)

export default NotFoundPage
