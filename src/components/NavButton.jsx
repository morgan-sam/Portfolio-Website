import React, { useState } from "react"

const NavButton = props => {
  const [hover, setHover] = useState(false)

  const navButtonStyle = {
    position: "relative",
    margin: "0.4rem 0.6rem",
    padding: "0.6rem 1.4rem",
    color: hover ? "black" : "white",
    border: "1px solid white",
    background: "none",
    overflow: "hidden",
  }

  const backgroundStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    zIndex: "-1",
    transform: hover ? "translate(0%, 0%)" : "translate(100%, 100%)",
  }

  return (
    <button
      onMouseOver={() => setHover(true)}
      onFocus={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={navButtonStyle}
    >
      {props.text}
      <div style={backgroundStyle}></div>
    </button>
  )
}

export default NavButton
