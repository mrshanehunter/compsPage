import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"
import Nav from "./Nav"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" /> <meta charSet="utf-8" />
          <script src="https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js"></script>
        </Helmet>
        <div className="site">
          <Nav siteTitle={data.site.siteMetadata.title} />
          <div className="site-content">{children}</div>
          <Footer />
        </div>
      </>
    )}
  />
)

export default Layout
