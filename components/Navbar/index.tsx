"use client";

import React, { useState } from "react";
import "./Navbar.scss"; // Assuming you have styles defined in Navbar.scss
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
		<nav className="navbar_container">
			<div className={`closed_nav ${isOpen ? "isOpen" : ""}`}>
				<div className="closed_nav_inner">
					<HamburgerIcon isActive={isOpen} onClick={handleMenuClick} className="navbar_hamburger_icon" />
					<div className="logo_container">
						<Image src={mySvg} alt="My SVG" width={40} height={40} />
					</div>
					<div className="social_media_container">
						<FaPatreon className="social_media" size={25} />
						<FaLinkedin className="social_media" size={25} />
						<FaFacebook className="social_media" size={25} />
						<FaTwitter className="social_media" size={25} />
						<FaInstagram className="social_media" size={25} />
					</div>
				</div>
			</div>
			<div className={`menu ${isOpen ? "menu_open" : ""}`}>
				<div className="menu_link_container">
					<PageLink
						href="/"
						text="Home"
						className="menu_item"
						hideUnderline
						bold
						size="xxlarge"
					/>
					<Spacer gap="small" />
					<PageLink
						href="/"
						text="About"
						className="menu_item"
						hideUnderline
						bold
						size="xxlarge"
					/>
					<Spacer gap="small" />
					<PageLink
						href="/"
						text="Portfolio"
						className="menu_item"
						hideUnderline
						bold
						size="xxlarge"
					/>
					<Spacer gap="small" />
					<PageLink
						href="/"
						text="Contact"
						className="menu_item"
						hideUnderline
						bold
						size="xxlarge"
					/>
				</div>
				<div className="contact_section">
					<div className="email_container">
						<p className="email">hi@pixelintelligence.com</p>
					</div>

					<div className="phone_container">
						<p className="phone">04441232567</p>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
