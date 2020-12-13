import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Branding() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "yourbrandhere.png" }) {
        childImageSharp {
          fixed(width: 175, height: 175) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div style={{display: `flex`, flexDirection: `column`, justifyContent: `center`, maxWidth: `75%`, margin: `0 auto` }}>
      <h4
        style={{
          textAlign: `center`,
          fontSize: `2rem`,
          textShadow: `0.15rem 0.15rem rgba(0, 0, 0, 0.8)`,
          marginTop: `0`,
        }}
      >
        Courtesy Of:
      </h4>
      <Img fixed={data.file.childImageSharp.fixed} alt="" style={{ alignSelf: `center`}} />
    </div>
  )
}
