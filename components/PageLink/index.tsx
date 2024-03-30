"use client";

import React, { useMemo } from "react";
import { MdArrowOutward } from "react-icons/md";
import "./PageLink.scss";

type Props = {
	text: string;
	bold?: boolean;
	marginLeft?: "small" | "medium" | "large" | "";
	marginRight?: "small" | "medium" | "large" | "";
	href: string;
	className?: string;
	hideUnderline?: boolean;
	size?: "small" | "medium" | "large" | "xlarge" | "xxlarge";
};

const PageLink = ({
	text,
	bold = false,
	marginLeft = "",
	marginRight = "",
	href,
	className,
	hideUnderline,
	size,
}: Props) => {
	const marginLeftStyles = useMemo(() => {
		switch (marginLeft) {
			case "small":
				return "1rem";
			case "medium":
				return "2rem";
			case "large":
				return "3rem";
			default:
				return undefined;
		}
	}, [marginLeft]);

	const marginRightStyles = useMemo(() => {
		switch (marginRight) {
			case "small":
				return "1rem";
			case "medium":
				return "2rem";
			case "large":
				return "3rem";
			default:
				return undefined;
		}
	}, [marginRight]);

	const { arrowSize, textSize } = useMemo(() => {
		switch (size) {
			case "small":
			case "medium":
				return {
					textSize: "1.3rem",
					arrowSize: 30,
				};
			case "large":
				return {
					textSize: "2rem",
					arrowSize: 40,
				};
			case "xlarge":
				return {
					textSize: "2.7rem",
					arrowSize: 50,
				};
			case "xxlarge":
				return {
					textSize: "3rem",
					arrowSize: 60,
				};
			default:
				return {
					textSize: "1.3rem",
					arrowSize: 30,
				};
		}
	}, [size]);

	const handleClick = () => {
		console.log("Navigating to: ", href);
	};

	return (
		<div
			onClick={handleClick}
			className={`page_link_container ${className ? className : ""}`}
			style={{
				marginLeft: marginLeft ? marginLeftStyles : undefined,
				marginRight: marginRight ? marginRightStyles : undefined,
			}}
		>
			<div className={`page_link_content ${hideUnderline ? "no_padding" : ""}`}>
				<p
					className="page_link_text"
					style={{ fontWeight: bold ? "bold" : undefined, fontSize: textSize }}
				>
					{text}
				</p>
				<MdArrowOutward className="page_link_icon" size={arrowSize} />
			</div>
			{!hideUnderline && <div className="page_link_underline"></div>}
		</div>
	);
};

export default PageLink;
