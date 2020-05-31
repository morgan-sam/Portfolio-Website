import React from "react"

const NavButton = props => {
  const navButtonStyle = {
    margin: "0.4rem 0.6rem",
    padding: "0.6rem 1.4rem",
    color: "white",
    border: "1px solid white",
    background: "none",
  }

  return <button style={navButtonStyle}>{props.text}</button>
}

export default NavButton
