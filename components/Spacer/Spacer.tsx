import React from "react";

type Props = {
	size: "small" | "medium" | "large";
};

const Spacer = ({ size }: Props) => {
	switch (size) {
		case "small":
			return <div style={{ height: "3rem" }}></div>;
		case "medium":
			return <div style={{ height: "6rem" }}></div>;
		case "large":
			return <div style={{ height: "9rem" }}></div>;
	}
};

export default Spacer;
