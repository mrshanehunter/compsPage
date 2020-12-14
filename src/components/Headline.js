import React from "react"

export default function Headline() {
  return (
    <h1
      style={{
        fontFamily: `"halyard-display", sans-serif`,
  fontWeight: `900`,
  fontStyle: `normal`,
        letterSpacing: `0.75rem`,
        fontSize: `6rem`,
        textShadow: `0.25rem 0.25rem rgba(0, 0, 0, 0.8)`,
        transform: `skewY(-15deg)`,
        paddingBottom: `2rem`,
        marginTop: `0`,
      }}
    >Win!
    </h1>
  )
}
