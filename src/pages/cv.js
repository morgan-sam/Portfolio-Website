import React, { useEffect } from "react"
import { CV_LINK } from "../data/file_links"

export default () => {
  useEffect(() => (window.location = CV_LINK), [])
  return <div>Loading CV...</div>
}
