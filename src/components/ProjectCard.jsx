import React from "react";
import OnVisible from "./OnVisible";

const ProjectCard = (props) => {
    const {
        fadeDelay,
        className,
        title,
        img,
        live,
        source,
        focused,
        setFocused,
        mobileView
    } = props;

    return (
        <OnVisible
            effect={"fade-in"}
            className={`projectSubContainer ${
                focused === className ? "focused" : null
            }`}
            delay={fadeDelay}
        >
            <div className={"projectSubHeading"}>{title}</div>
            <div
                className={`projectImg ${className}`}
                onClick={() => {
                    if (focused !== className && !mobileView)
                        setFocused(className);
                    else setFocused(null);
                }}
            />
            <div className={"linkTextStyle"}>
                {live && <a href={live}>Live</a>}
                {live && source && " / "}
                {source && <a href={source}>Source Code</a>}
            </div>
        </OnVisible>
    );
};

export default ProjectCard;
