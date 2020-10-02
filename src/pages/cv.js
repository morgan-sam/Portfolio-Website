import React, { useEffect } from "react"
import { CV_LINK } from "../data/file_links"
import "../styles/cv_loading.css"

export default () => {
  useEffect(() => (window.location = CV_LINK), [])
  return <div className="cv-loading">Loading CV...</div>
}
