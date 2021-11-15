import React, { useState, useEffect } from "react";
import AboutCard from "./AboutCard";
import Contribution from "./Contribution";

const About = React.forwardRef((props, ref) => {
    const [osc, setOsc] = useState([
        {
            name: "Electron",
            url: "https://api.github.com/repos/electron/electron",
            stars: null
        },
        {
            name: "Material-UI",
            url: "https://api.github.com/repos/mui-org/material-ui",
            stars: null
        },
        {
            name: "Gatsby",
            url: "https://api.github.com/repos/gatsbyjs/gatsby",
            stars: null
        },
        {
            name: "Serverless",
            url: "https://api.github.com/repos/serverless/serverless",
            stars: null
        }
    ]);

    const getStarNum = async (url) => {
        let response = await fetch(url, {
            headers: {
                Accept: "application/vnd.github.preview"
            }
        });
        const json = await response.json();
        return json.stargazers_count;
    };

    const getAllStars = async () =>
        Promise.all(
            osc.map(async (el) => ({ ...el, stars: await getStarNum(el.url) }))
        );

    useEffect(() => {
        const init = async () => {
            const all = await getAllStars();
            setOsc(all);
        };
        init();
    }, []);

    return (
        <div className={"section aboutSection"} ref={ref}>
            <div className={"line"} />
            <div className={"cardContainer"}>
                <AboutCard
                    title={"Bio"}
                    text={[
                        "I am a Front End Engineer who loves programming and solving problems.",
                        "I like to build software from scratch using minimal libraries."
                    ]}
                />
                <AboutCard
                    title={"Experience"}
                    text={[
                        "BlockFi",
                        "Front End Engineer",
                        "January 2021 - Present",
                        "Tech Stack:",
                        "React, Redux, TypeScript, Styled Components, Jira"
                    ]}
                />
                <AboutCard
                    title={"Open Source Contributions"}
                    text={
                        <ul style={{ width: "100%", position: "relative" }}>
                            {osc.map((el, i) => (
                                <Contribution key={i} {...el} />
                            ))}
                        </ul>
                    }
                />
            </div>
        </div>
    );
});

export default About;
