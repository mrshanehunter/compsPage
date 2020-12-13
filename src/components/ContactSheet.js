import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function ContactSheet() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "yourbrandhere.png" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        maxWidth: `75%`,
        margin: `0 auto 3rem`,
        backgroundColor: `rgba(255, 255, 255, 0.5)`,
        boxShadow: `3px 3px 3px 3px rgba(0, 0, 0, 0.3)`,
      }}
    >
      <h4
        style={{
          textAlign: `center`,
          fontSize: `1.4rem`,
          textShadow: `0.15rem 0.15rem rgba(0, 0, 0, 0.8)`,
          marginTop: `1rem`,
        }}
      >
        Visit The Website:
      </h4>
      <a style={{ alignSelf: `center`, cursor: `pointer`}} href="https://thatguyfrommarketing.com" >
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt=""
        style={{ alignSelf: `center` }}
      /></a>
      <h4
      style={{
        textAlign: `center`,
        fontSize: `1.4rem`,
        textShadow: `0.15rem 0.15rem rgba(0, 0, 0, 0.8)`,
        marginTop: `1rem`,
        marginBottom: `0.5rem`,
      }}
      >Email Us:</h4>
      <a style={{textDecoration: `underline`, textAlign: `center`, cursor: `pointer`, fontSize: `1.4rem`}} href="mailto:webdev@thatguyfrommarketing.com">your@contactemail.here</a>
      <p style={{textAlign: `center`, fontSize: `0.8rem`, color: `#747574`}}>Currently routed to a dummy email address</p>

      <h4
      style={{
        textAlign: `center`,
        fontSize: `1.4rem`,
        textShadow: `0.15rem 0.15rem rgba(0, 0, 0, 0.8)`,
        marginTop: `0.5rem`,
        marginBottom: `0.5rem`,
      }}
      >Call Us:</h4>
      <p style={{textAlign: `center`, fontSize: `1.4rem`, marginTop: `0`, color: `white`}}>1800-Your-Number-Here</p>

    </div>
  )
}
