import React, { useState } from "react"

const NavButton = props => {
  const [hover, setHover] = useState(false)

  const navButtonStyle = {
    margin: "0.4rem 0.6rem",
    padding: "0.6rem 1.4rem",
    color: "white",
    border: "1px solid white",
    background: "none",
  }

  console.log(hover)

  return (
    <button
      onMouseOver={() => setHover(true)}
      onFocus={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={navButtonStyle}
    >
      {props.text}
    </button>
  )
}

export default NavButton
