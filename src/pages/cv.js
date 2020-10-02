import React, { useEffect } from "react"
const CV =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-website-f9e63.appspot.com/o/cv.pdf?alt=media&token=0a70f3d9-f111-4441-9437-3c400d28873b"

export default () => {
  useEffect(() => (window.location = CV), [])
  return <div>Loading CV...</div>
}
