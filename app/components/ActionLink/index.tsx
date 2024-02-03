import React, { useMemo } from "react";
import { MdArrowOutward } from "react-icons/md";
import styles from "./ActionLink.module.scss";

type Props = {
	text: string;
	bold?: boolean;
	marginLeft?: "small" | "medium" | "large" | "";
	marginRight?: "small" | "medium" | "large" | "";
	onClick: () => void;
};

const ActionLink = ({
	text,
	bold = false,
	marginLeft = "",
	marginRight = "",
	onClick,
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

	return (
		<div
			className={styles.action_link_container}
			style={{
				marginLeft: marginLeft ? marginLeftStyles : undefined,
				marginRight: marginRight ? marginRightStyles : undefined,
			}}
		>
			<div className={styles.action_link_button} onClick={onClick}>
				<p
					className={styles.action_link_text}
					style={{ fontWeight: bold ? "bold" : undefined }}
				>
					{text}
				</p>
				<MdArrowOutward className={styles.action_link_icon} size={30} />
			</div>
			<div className={styles.action_link_underline}></div>
		</div>
	);
};

export default ActionLink;
