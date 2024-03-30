import React from "react";
import Image from "next/image";
import "./Hero.scss";
import PageLink from "../../PageLink";
import Heading from "../../Heading";

function Hero() {
	return (
		<div className="hero_container">
			<Image
				src="/images/hero/illustratior-bg-hero-4.jpg"
				alt="hero"
				fill={true}
				quality={100}
				className="hero_image"
				style={{ objectFit: "cover" }}
			/>
			<main className="main_hero_content">
				<div className="hero_heading_container">
					<Heading text={"Pixel Intel"} size={"large"} lineRight />
				</div>
				<h2 className="title_service">AI Art Generation</h2>
				<div className="title_description_container">
					<p className="title_description">
						Lorem ipsum dolor sit amet consectetur in quisque varius eget turpis
						sollicitudin purus arcu morbi lorem lacus sit in tellus dolor eget.
					</p>
				</div>
				<div className="action_link_container">
					<PageLink bold text={"Contact Us"} marginRight={"small"} href={""} />
					<PageLink marginLeft={"small"} text={"Browse Portfolio"} href={""} />
				</div>
			</main>
		</div>
	);
}

export default Hero;
