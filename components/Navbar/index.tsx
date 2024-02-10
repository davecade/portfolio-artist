import React from "react";
import styles from "./Navbar.module.scss"; // Assume you have some styles defined
import mySvg from "@/public/logo-web-icon.svg";
import Image from "next/image";
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
	FaPatreon,
} from "react-icons/fa";

const Navbar = () => {
	return (
		<nav className={styles.container}>
			<div className={styles.container_inner}>
				<div className={styles.hamburger_container}>
					<div className={styles.hamburger_line}></div>
					<div className={styles.hamburger_line}></div>
					<div className={styles.hamburger_line}></div>
				</div>
				<div className={styles.logo_container}>
					<Image src={mySvg} alt="My SVG" width={40} height={40} />
				</div>
				<div className={styles.social_media_container}>
					<FaPatreon className={styles.social_media} size={25} />
					<FaLinkedin className={styles.social_media} size={25} />
					<FaFacebook className={styles.social_media} size={25} />
					<FaTwitter className={styles.social_media} size={25} />
					<FaInstagram className={styles.social_media} size={25} />
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
