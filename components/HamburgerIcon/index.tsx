import React from "react";
import styles from "./HamburgerIcon.module.scss";

type Props = {
	isActive: boolean;
	onClick: () => void;
};

const HamburgerIcon = ({ isActive, onClick }: Props) => {
	return (
		<div
			className={`${styles.hamburger_container} ${
				isActive ? styles.active : ""
			}`}
			onClick={onClick}
		>
			<div className={styles.hamburger_line}></div>
			<div className={styles.hamburger_line}></div>
			<div className={styles.hamburger_line}></div>
		</div>
	);
};

export default HamburgerIcon;
