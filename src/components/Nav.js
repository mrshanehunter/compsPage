import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const ListLink = (props) => (
  <li style={{ color: `white`, display: `inline-block`, marginRight: `1rem`}}>
<AniLink cover to={props.to} direction="left" duration={0.5} bg="#525453">{props.children}</AniLink>
</li>
)

export default function Nav({ children }) {
  return (
   <header style={{ 
      minWidth: `100vw`,
      height: `4rem`,
      marginBottom: `1rem`,
      backgroundColor: `rgba(0, 0, 0, 0.8)`,
      boxShadow: `2px 2px 2px 2px rgba(0, 0, 0, 0.5)`,
      display: `grid`,
      gridAutoFlow: `column`,
      gridTemplateColumns: `1fr 2fr`,

      }}>
        <AniLink cover to="/" direction="left" duration={0.5} bg="#525453" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ color: `white`,marginLeft: `1.5rem`, fontSize: `1.4rem` }}>Landing Page</h3>
        </AniLink>
        <ul style={{ listStyle: `none`, textAlign: `right`, marginRight: `1.5rem`, fontSize: `1.4rem`}} >
          <ListLink to="/enter/">Win!</ListLink>
          <ListLink to="/tandc/">T&C</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
  )
}