import React from "react"

export default function Home() {
  const homeStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  }

  const titleStyle = {
    margin: "6rem",
  }

  return (
    <div style={homeStyle}>
      <h1 style={titleStyle}>
        Sam Morgan<br></br>UK/USA Based Web Developer
      </h1>
    </div>
  )
}
