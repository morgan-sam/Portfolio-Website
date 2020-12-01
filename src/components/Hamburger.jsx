import React from "react";

const Hamburger = (props) => {
    return (
        <div className={"hamburger"}>
            <div className={"hamburgerButton"} onClick={() => props.onChange()}>
                <div
                    className={`hamburgerLine ${
                        props.hamburgerOpen ? "openHamburgerLine" : null
                    }`}
                />
                <div
                    className={`hamburgerLine ${
                        props.hamburgerOpen ? "openHamburgerLine" : null
                    }`}
                />
                <div
                    className={`hamburgerLine ${
                        props.hamburgerOpen ? "openHamburgerLine" : null
                    }`}
                />
            </div>
        </div>
    );
};

export default Hamburger;
