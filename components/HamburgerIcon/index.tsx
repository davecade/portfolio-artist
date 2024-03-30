import React from "react";
import "./HamburgerIcon.scss";

type Props = {
    isActive: boolean;
    onClick: () => void;
};

const HamburgerIcon = ({ isActive, onClick }: Props) => {
    return (
        <div
            className={`hamburger_container ${isActive ? "active" : ""}`}
            onClick={onClick}
        >
            <div className="hamburger_line"></div>
            <div className="hamburger_line"></div>
            <div className="hamburger_line"></div>
        </div>
    );
};

export default HamburgerIcon;
