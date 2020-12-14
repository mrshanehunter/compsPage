import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Headline from "../components/Headline"
import SubHead from "../components/SubHead"
import Container from "../components/Container"
import Branding from "../components/Branding"

import BackgroundImage from "gatsby-background-image"

export default function Home() {
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
        <Container>
          <Headline />
          <SubHead SubHeadText="A tropical island getaway for 4" />
          <SubHead SubHeadText="Hundreds of runners up prizes to be won!" />
          <Branding></Branding>
          <div
            style={{
              display: `flex`,
              justifyContent: `center`,
              padding: `0rem`,
              maxWidth: `100%`,
              margin: `0 auto`,
            }}
          >
            <AniLink
              cover
              to="/enter/"
              direction="left"
              duration={0.5}
              bg="#525453"
              style={{ textShadow: `none`, backgroundImage: `none` }}
            >
              <button
                type="button"
                style={{
                  marginTop: `3rem`,
                  padding: `1.5rem`,
                  Width: `100%`,
                  borderRadius: `5px 15px`,
                  backgroundColor: `rgba(9, 222, 66, 0.5)`,
                  fontSize: `1.8rem`,
                  cursor: `pointer`,
                  border: `thin outset #044f18`,
                }}
              >
                Enter Now!
              </button>
            </AniLink>
          </div>
        </Container>
      </Layout>
    </BackgroundImage>
  )
}
