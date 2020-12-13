import React from "react"

export default function SubHead(props) {
  return (
    <h2
      style={{
        fontSize: `3rem`,
        padding: `1rem`,
        textShadow: `0.2rem 0.2rem rgba(0, 0, 0, 0.8)`,
        textAlign: `center`,
        marginTop: `0`,
        marginBottom: `0`,
      }}
    >
      {props.SubHeadText}
    </h2>
  )
}
