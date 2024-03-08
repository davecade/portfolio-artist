"use client";

import React, { useState } from "react";
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
import HamburgerIcon from "../HamburgerIcon";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleMenuClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<nav className={styles.container}>
			<div className={`${styles.closed_nav} ${isOpen ? styles.isOpen : ""}`}>
				<div className={styles.closed_nav_inner}>
					<HamburgerIcon isActive={isOpen} onClick={handleMenuClick} />
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
			</div>
			<div className={`${styles.menu} ${isOpen ? styles.menu_open : ""}`}></div>
		</nav>
	);
};
export default Navbar;
