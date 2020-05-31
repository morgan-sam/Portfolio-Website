import React from "react"
import TopNavBar from "../components/TopNavBar"

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

  const backgroundStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(
      "https://images.unsplash.com/photo-1590664095641-7fa05f689813?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    )`,
    zIndex: "-10",
    transform: "scaleY(-1)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }

  const titleStyle = {
    position: "absolute",
    top: "40%",
    color: "white",
    fontSize: "3rem",
  }

  return (
    <div style={homeStyle}>
      <h1 style={titleStyle}>
        Sam Morgan<br></br>UK/USA Based Web Developer
      </h1>
      <TopNavBar></TopNavBar>
      <div style={backgroundStyle} />
    </div>
  )
}
