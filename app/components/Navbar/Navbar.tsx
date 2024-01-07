import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss"; // Assume you have some styles defined
import CustomLogo from "../CustomLogo/CustomLogo";

const Navbar = () => {
	return (
		<nav className={styles.container}>
			<CustomLogo />
		</nav>
	);
};
export default Navbar;
