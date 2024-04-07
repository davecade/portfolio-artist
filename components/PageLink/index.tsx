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
	arrowSizeOverride?: number | null | undefined;
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
	arrowSizeOverride,
}: Props) => {
	const marginLeftStyles = useMemo(() => {
		switch (marginLeft) {
			case "small":
				return "margin_left_small";
			case "medium":
				return "margin_left_medium";
			case "large":
				return "margin_left_large";
			default:
				return undefined;
		}
	}, [marginLeft]);

	const marginRightStyles = useMemo(() => {
		switch (marginRight) {
			case "small":
				return "margin_right_small";
			case "medium":
				return "margin_right_small";
			case "large":
				return "margin_right_small";
			default:
				return undefined;
		}
	}, [marginRight]);

	const { arrowSize } = useMemo(() => {
		if (arrowSizeOverride) {
			return {
				arrowSize: arrowSizeOverride,
			};
		}

		switch (size) {
			case "small":
			case "medium":
				return {
					arrowSize: 30,
				};
			case "large":
				return {
					arrowSize: 40,
				};
			case "xlarge":
				return {
					arrowSize: 50,
				};
			case "xxlarge":
				return {
					arrowSize: 60,
				};
			default:
				return {
					arrowSize: 30,
				};
		}
	}, [size, arrowSizeOverride]);

	const handleClick = () => {
		console.log("Navigating to: ", href);
	};

	return (
		<div
			onClick={handleClick}
			className={`page_link_container ${marginLeft ? marginLeftStyles : ""} ${
				marginRight ? marginRightStyles : ""
			} ${className ? className : ""}`}
		>
			<div className={`page_link_content ${hideUnderline ? "no_padding" : ""}`}>
				<p className={`page_link_text ${bold ? "bold" : ""}`}>{text}</p>
				<MdArrowOutward className="page_link_icon" size={arrowSize} />
			</div>
			{!hideUnderline && <div className="page_link_underline"></div>}
		</div>
	);
};

export default PageLink;
