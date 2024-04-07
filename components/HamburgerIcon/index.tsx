import React from "react";
import "./HamburgerIcon.scss";

type Props = {
	isActive: boolean;
	className?: string;
	onClick: () => void;
};

const HamburgerIcon = ({ isActive, onClick, className }: Props) => {
	return (
		<div
			className={`hamburger_container ${isActive ? "active" : ""} ${className}`}
			onClick={onClick}
		>
			<div className="hamburger_line"></div>
			<div className="hamburger_line"></div>
			<div className="hamburger_line"></div>
		</div>
	);
};

export default HamburgerIcon;
