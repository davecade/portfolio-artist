import React from "react";

type Props = {
	size: "small" | "medium" | "large" | "xlarge" | "xxlarge";
};

const Spacer = ({ size }: Props) => {
	switch (size) {
		case "small":
			return <div style={{ height: "3rem" }}></div>;
		case "medium":
			return <div style={{ height: "6rem" }}></div>;
		case "large":
			return <div style={{ height: "9rem" }}></div>;
		case "xlarge":
			return <div style={{ height: "12rem" }}></div>;
		case "xxlarge":
			return <div style={{ height: "15rem" }}></div>;
	}
};

export default Spacer;
