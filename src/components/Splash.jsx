import React from "react";
import OnVisible from "./OnVisible";

const Splash = React.forwardRef((props, ref) => {
    return (
        <div className={"section"} ref={ref}>
            <OnVisible effect={"fade-in"}>
                <div className={"splashTitle"}>
                    <span>Sam Morgan</span>
                    <span>Full Stack</span>
                    <span>Developer</span>
                </div>
            </OnVisible>
            <div className={"splashBackground"} />
        </div>
    );
});

export default Splash;
