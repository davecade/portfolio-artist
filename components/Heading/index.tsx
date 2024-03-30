import React from "react";
import "./Heading.scss";

type Props = {
	text: string;
	size: "small" | "medium" | "large" | "xlarge";
	lineLeft?: boolean;
	lineRight?: boolean;
};

const Heading = ({ text, size, lineLeft, lineRight }: Props) => {
	const fontSizeValue = (() => {
		switch (size) {
			case "small":
				return "2rem";
			case "medium":
				return "4rem";
			case "large":
				return "6rem";
			case "xlarge":
				return "8rem";
			default:
				return "1.5rem";
		}
	})();

	const lineHeightValue = (() => {
		switch (size) {
			case "small":
				return "0.1rem";
			case "medium":
				return "0.3rem";
			case "large":
				return "0.4rem";
			default:
				return "0.1rem";
		}
	})();

	const widthValue = (() => {
		switch (size) {
			case "small":
				return "5rem";
			case "medium":
				return "10rem";
			case "large":
				return "15rem";
			default:
				return "5rem";
		}
	})();

	return (
		<div className="heading_container">
			{lineLeft && (
				<div
					className="heading_line"
					style={{
						width: widthValue,
						height: lineHeightValue,
					}}
				></div>
			)}
			<h1
				className="heading_text"
				style={{
					fontSize: fontSizeValue,
					paddingRight: lineRight ? "2rem" : undefined,
					paddingLeft: lineLeft ? "2rem" : undefined,
				}}
			>
				{text}
			</h1>
			{lineRight && (
				<div
					className="heading_line"
					style={{
						width: widthValue,
						height: lineHeightValue,
					}}
				></div>
			)}
		</div>
	);
};

export default Heading;
