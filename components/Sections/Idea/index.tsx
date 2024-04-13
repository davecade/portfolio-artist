import Image from "next/image";
import React from "react";
import "./Idea.scss";
import Heading from "@/components/Heading";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaPatreon,
	FaTwitter,
} from "react-icons/fa";
import PageLink from "@/components/PageLink";
import Spacer from "@/components/Spacer/Spacer";

const Idea = () => {
	return (
		<div className="idea_container">
			<div className="image_container">
				<Image
					src="/images/idea/illustrator_forest.jpg"
					className="idea_image"
					fill
					quality={100}
					priority
					alt="idea"
				/>
			</div>
			<main className="main_idea_content">
				<div className="heading_container">
					<Heading text={"Have an idea?"} lineRight className="have_an_idea" />
				</div>
				<div className="heading_container">
					<Heading text={"Lets work."} className="lets_work" />
				</div>
				<Spacer gap="xsmall" />
				<div className="contact_section">
					<div className="social_media_container">
						<FaPatreon className="social_media" size={25} />
						<FaLinkedin className="social_media" size={25} />
						<FaFacebook className="social_media" size={25} />
						<FaTwitter className="social_media" size={25} />
						<FaInstagram className="social_media" size={25} />
					</div>
					<div className="contact">
						<div className="email_container">
							<p className="email">admin@pixelint.com</p>
						</div>

						<div className="phone_container">
							<p className="phone">04441232567</p>
						</div>
						<div className="link_container">
							<PageLink
								bold
								text={"Contact Us"}
								marginLeft="medium"
								hideUnderline
								href={""}
							/>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Idea;
