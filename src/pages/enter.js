import React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Container from "../components/Container"
import Form from "../components/Form"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

export default function Enter() {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "getaway.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      style={{
        width: `100vw`,
        minHeight: `100vh`,
        backgroundPosition: `center center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
      }}
    >
      <Layout>
        <Header headerText="Enter To Win!" />
        <Container>
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "1rem",
            }}
          >
            <h2 style={{ textAlign: `center`}}>
              Submit A Qualified Entry
            </h2>
            <ol
              style={{
                color: "white",
                lineHeight: "1",
                padding: "0 2rem",
              }}
            >
              <li style={{ paddingBottom: `0.5rem`}}>platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim </li>
              <li style={{ paddingBottom: `0.5rem`}}>cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius</li>
              <li> duis at consectetur lorem donec massa sapien faucibus et molestie</li>
            </ol>
          </div>

          <Form />
        </Container>
      </Layout>
    </BackgroundImage>
  )
}
