import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Header from "../components/Header"
import Layout from "../components/Layout"


export default function fourzerofour() {
  return (
    <Layout>
      <Header headerText="404 - Page Not Found" />
      <div
      style={{textAlign: `center`, color: `white`, fontSize: `1.4rem`}}
      >Sorry, that page doesn't exist.</div>
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
              to="/"
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
                Return To The Site
              </button>
            </AniLink>
          </div>
    </Layout>
  )
}