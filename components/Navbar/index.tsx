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
import PageLink from "../PageLink";
import Spacer from "../Spacer/Spacer";

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
			<div className={`${styles.menu} ${isOpen ? styles.menu_open : ""}`}>
				<div className={styles.menu_link_container}>
					<PageLink
						href="/"
						text="Home"
						className={styles.menu_item}
						hideUnderline
						bold
						size="xxlarge"
					/>
					<Spacer size="small" />
					<PageLink
						href="/"
						text="About"
						className={styles.menu_item}
						hideUnderline
						bold
						size="xxlarge"
					/>
					<Spacer size="small" />
					<PageLink
						href="/"
						text="Portfolio"
						className={styles.menu_item}
						hideUnderline
						bold
						size="xxlarge"
					/>
					<Spacer size="small" />
					<PageLink
						href="/"
						text="Contact"
						className={styles.menu_item}
						hideUnderline
						bold
						size="xxlarge"
					/>
				</div>
				<div className={styles.contact_section}>
					<div className={styles.email_container}>
						<p className={styles.email}>hi@koispirit.com</p>
					</div>

					<div className={styles.phone_container}>
						<p className={styles.phone}>04441232567</p>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
