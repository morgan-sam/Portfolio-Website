import React from "react"

const TopNavBar = props => {
  const buttons = ["home", "about", "blog", "contact"]

  const navBarStyle = {
    position: "absolute",
    top: "1rem",
    right: "1rem",
  }

  const navButtonStyle = {
    margin: "0.4rem 0.6rem",
    padding: "0.6rem 1.4rem",
  }

  const navButton = name => <button style={navButtonStyle}>{name}</button>

  return <div style={navBarStyle}>{buttons.map(el => navButton(el))}</div>
}

export default TopNavBar
