import React from 'react';

export default function Header(props) {
  return (
  <h1 style={{
    textShadow: `0.15rem 0.15rem rgba(0,0,0,0.5)`,
    letterSpacing: `0.15rem`,
    fontSize: `2.5rem`,
    textAlign: `center`,
    marginTop:`0`,

  }}>{props.headerText}</h1>
  )
}