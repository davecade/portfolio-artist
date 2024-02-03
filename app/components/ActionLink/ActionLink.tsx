import React, { useMemo } from "react";
import { MdArrowOutward } from "react-icons/md";
import styles from "./ActionLink.module.scss";

type Props = {
	text: string;
	bold?: boolean;
	paddingLeft?: "small" | "medium" | "large" | "";
	paddingRight?: "small" | "medium" | "large" | "";
	onClick: () => void;
};

const ActionLink = ({
	text,
	bold = false,
	paddingLeft = "",
	paddingRight = "",
	onClick,
}: Props) => {
	const paddingLeftStyles = useMemo(() => {
		switch (paddingLeft) {
			case "small":
				return "1rem";
			case "medium":
				return "2rem";
			case "large":
				return "3rem";
			default:
				return undefined;
		}
	}, [paddingLeft]);

	const paddingRightStyles = useMemo(() => {
		switch (paddingRight) {
			case "small":
				return "1rem";
			case "medium":
				return "2rem";
			case "large":
				return "3rem";
			default:
				return undefined;
		}
	}, [paddingRight]);

	return (
		<div
			className={styles.action_link_container}
			style={{
				paddingLeft: paddingLeft ? paddingLeftStyles : undefined,
				paddingRight: paddingRight ? paddingRightStyles : undefined,
			}}
		>
			<div className={styles.action_link_button} onClick={onClick}>
				<p
					className={styles.action_link_text}
					style={{ fontWeight: bold ? "bold" : undefined }}
				>
					{text}
				</p>
				<MdArrowOutward size={30} />
			</div>
			<div className={styles.action_link_underline}></div>
		</div>
	);
};

export default ActionLink;
