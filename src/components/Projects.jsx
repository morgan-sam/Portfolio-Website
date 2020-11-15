import React, { useState, useEffect } from "react"
import OnVisible from "./OnVisible"
import ProjectCard from "./ProjectCard"

const Projects = React.forwardRef((props, ref) => {
  const [focused, setFocused] = useState(null)
  useEffect(() => setFocused(null), [props.scrollPosition])
  const cardCommonProps = {
    focused,
    setFocused,
    mobileView:
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 1400px)").matches,
  }

  return (
    <div className={"section projectSection"} ref={ref}>
      <OnVisible effect={"fade-in"}>
        <div className={"projectTitle"}>Projects</div>
      </OnVisible>
      <div className={"projectContainer"}>
        <ProjectCard
          fadeDelay={0}
          className={"dealsmate"}
          title={"Dealsmate"}
          source={"https://github.com/hatchways/team-apple-cider"}
          {...cardCommonProps}
        />
        <ProjectCard
          fadeDelay={200}
          className={"platform"}
          title={"Project Management Platform"}
          source={"https://github.com/morgan-sam/Project-Management-Platform"}
          {...cardCommonProps}
        />
        <ProjectCard
          fadeDelay={400}
          className={"traintracks"}
          title={"Train Tracks Game"}
          live={"https://morgan-sam.github.io/Train-Tracks-React/"}
          source={"https://github.com/morgan-sam/Train-Tracks-React"}
          {...cardCommonProps}
        />
      </div>
    </div>
  )
})

export default Projects
