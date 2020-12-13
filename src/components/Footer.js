import React from "react";

export default function Footer() {
  return (
    <footer
    style={{
      minWidth: `100vw`,
      height: `3rem`,
      marginTop: `1rem`,
      paddingTop: `1.5rem`,
      backgroundColor: `rgba(0, 0, 0, 0.8)`,
      textAlign: `center`,
      fontFamily: `montserrat, sans-serif`,
      fontWeight: `400`,
      fontStyle: `normal`,
      fontSize: `0.9rem`,
      color:`#949393`,

      }}>
        &copy; 2020. All Rights Reserved. Design and Build by <a href="https://thatguyfrommarketing.com">That Guy From Marketing&reg;</a>
      </footer>
  )
}