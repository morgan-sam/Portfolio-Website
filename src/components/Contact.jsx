import React from "react"

const CV_LINK =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-website-f9e63.appspot.com/o/cv.pdf?alt=media&token=0a70f3d9-f111-4441-9437-3c400d28873b"

const Contact = React.forwardRef((props, ref) => {
  return (
    <div className={"section contactSection"} ref={ref}>
      <div className={"contactImage"} />
      <div className={"contactContainer"}>
        <div className={"contactText"}>Contact</div>
        <div className={"contactText emailText"}>
          samuel_morgan_@outlook.com
        </div>
        <div className={"contactText"}>
          <a href={CV_LINK}>Curriculum Vitae</a>
        </div>
        <div className={"contactText"}>
          <a href="https://github.com/morgan-sam">
            <div className="linkText">https://github.com/morgan-sam</div>
            <div className="linkImg githubImg" />
          </a>
          <a href="https://linkedin.com/in/morgan-sam">
            <div className="linkText">https://linkedin.com/in/morgan-sam</div>
            <div className="linkImg linkedinImg" />
          </a>
        </div>
        <div className={"contactText"}>
          <div>THANK YOU</div>
        </div>
        <div className={"contactText"}>© 2020</div>
      </div>
    </div>
  )
})

export default Contact
