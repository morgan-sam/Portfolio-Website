import React from "react";
import OnVisible from "./OnVisible";

const Splash = React.forwardRef((props, ref) => {
    return (
        <div className={"section"} ref={ref}>
            <OnVisible effect={"fade-in"}>
                <div className={"splashTitle"}>
                    <span>Sam Morgan</span>
                    <span>Front End</span>
                    <span>Engineer</span>
                </div>
            </OnVisible>
            <div className={"splashBackground"} />
        </div>
    );
});

export default Splash;
