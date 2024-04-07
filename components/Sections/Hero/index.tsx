"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import "./Hero.scss";
import PageLink from "../../PageLink";
import Heading from "../../Heading";
import useWindowWidth from "@/hooks/useWindowWidth";

function Hero() {
	const windowWidth = useWindowWidth();

	const arrowSize = useMemo(() => {
		if (windowWidth < 750) return 20;

		return null;
	}, [windowWidth]);

	return (
		<div className="hero_container">
			<div className="image_container">
				<Image
					src="/images/hero/illustratior-bg-hero-4.jpg"
					alt="hero"
					quality={100}
					fill
					className="hero_image"
				/>
			</div>

			<main className="main_hero_content">
				<div className="hero_heading_container">
					<Heading text={"Pixel Intel"} lineRight className="hero_heading" />
				</div>
				<h2 className="title_service">AI Art Generation</h2>
				<div className="title_description_container">
					<p className="title_description">
						Lorem ipsum dolor sit amet consectetur in quisque varius eget turpis
						sollicitudin purus arcu morbi lorem lacus sit in tellus dolor eget.
					</p>
				</div>
				<div className="action_link_container">
					<PageLink
						className={"hero_contact_button"}
						bold
						text={"Contact Us"}
						marginRight={"small"}
						href={""}
						arrowSizeOverride={arrowSize}
					/>
					<PageLink
						className={"hero_browse_button"}
						marginLeft={"small"}
						text={"Browse Portfolio"}
						href={""}
						arrowSizeOverride={arrowSize}
					/>
				</div>
			</main>
		</div>
	);
}

export default Hero;
