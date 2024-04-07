import React from "react";
import "./Heading.scss";

type Props = {
	text: string;
	lineLeft?: boolean;
	lineRight?: boolean;
	className?: string;
};

const Heading = ({ text, lineLeft, lineRight, className = "" }: Props) => {
	return (
		<div className={`heading_container ${className}`}>
			{lineLeft && <div className="heading_line"></div>}
			<h1
				className={`heading_text ${lineLeft ? "line_left_padding" : ""} ${
					lineRight ? "line_right_padding" : ""
				}`}
			>
				{text}
			</h1>
			{lineRight && <div className="heading_line"></div>}
		</div>
	);
};

export default Heading;
