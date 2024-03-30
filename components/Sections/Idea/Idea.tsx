import Image from "next/image";
import React from "react";
import styles from "./Idea.module.scss";
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
		<div className={styles.container}>
			<div className={styles.container}>
				<Image
					src="/images/idea/illustrator_forest.jpg"
					className={styles.image}
					fill
					quality={100}
					alt="idea"
				/>
				<main className={styles.main_hero_content}>
					<div className={styles.heading_container}>
						<Heading text={"Have an idea?"} size={"medium"} lineRight />
					</div>
					<div className={styles.heading_container}>
						<Heading text={"Lets work."} size={"xlarge"} />
					</div>
					<Spacer gap="xsmall" />
					<div className={styles.contact_section}>
						<div className={styles.social_media_container}>
							<FaPatreon className={styles.social_media} size={25} />
							<FaLinkedin className={styles.social_media} size={25} />
							<FaFacebook className={styles.social_media} size={25} />
							<FaTwitter className={styles.social_media} size={25} />
							<FaInstagram className={styles.social_media} size={25} />
						</div>
						<div className={styles.contact}>
							<div className={styles.email_container}>
								<p className={styles.email}>admin@pixelint.com</p>
							</div>

							<div className={styles.phone_container}>
								<p className={styles.phone}>04441232567</p>
							</div>
							<div className={styles.link_container}>
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
		</div>
	);
};

export default Idea;
