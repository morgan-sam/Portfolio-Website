import React from "react";
import OnVisible from "./OnVisible";

const AboutCard = (props) => {
    const { title, text } = props;

    return (
        <OnVisible effect={"fade-in"} className={"card"} delay={0}>
            <div className={"cardTitle"}>{title}</div>
            <div className={"cardText"}>
                {Array.isArray(text)
                    ? text.map((el, i) => (
                          <p key={i} style={{ marginBottom: "10px" }}>
                              {el}
                          </p>
                      ))
                    : text}
                <div className={"cardFadeOverlay"} />
            </div>
        </OnVisible>
    );
};

export default AboutCard;
