import { Project, Service, client } from "../types";

export const services: Service[] = [
	{
		id: "my-services-1",
		name: "Illustration",
		description:
			"Lorem ipsum dolor sit amet consectetur in quisque varius eget turpis sollicitudin purus.",
		image: "/images/services/illustration_service.jpg",
	},
	{
		id: "my-services-2",
		name: "Animation",
		description:
			"Lorem ipsum dolor sit amet consectetur in quisque varius eget turpis sollicitudin purus.",
		image: "/images/services/animation_service.jpg",
	},
	{
		id: "my-services-3",
		name: "Character Design",
		description:
			"Lorem ipsum dolor sit amet consectetur in quisque varius eget turpis sollicitudin purus.",
		image: "/images/services/character_design_service.jpg",
	},
	{
		id: "my-services-4",
		name: "Story Boarding",
		description:
			"Lorem ipsum dolor sit amet consectetur in quisque varius eget turpis sollicitudin purus.",
		image: "/images/services/storyboarding_service.jpg",
	},
];

export const projects: Project[] = [
	{
		id: "my-projects-1",
		name: "Project 1",
		image: "/images/services/futuristic-city.jpg",
	},
	{
		id: "my-projects-2",
		name: "Project 2",
		image: "/images/services/sunset-city.jpg",
	},
	{
		id: "my-projects-3",
		name: "Project 3",
		image: "/images/services/enchanted-tree.jpg",
	},
	{
		id: "my-projects-4",
		name: "Project 4",
		image: "/images/services/beautiful-woman.jpg",
	},
	{
		id: "my-projects-5",
		name: "Project 4",
		image: "/images/services/enchanted-forest.jpg",
	},
	{
		id: "my-projects-6",
		name: "Project 4",
		image: "/images/services/space-exploration.jpg",
	},
	{
		id: "my-projects-7",
		name: "Project 4",
		image: "/images/services/house-hill.jpg",
	},
];

export const clients: client[] = [
	{
		id: "my-clients-1",
		image: "/images/clients/agency-logo.svg",
	},
	{
		id: "my-clients-2",
		image: "/images/clients/business-logo.svg",
	},
	{
		id: "my-clients-3",
		image: "/images/clients/studio-logo.svg",
	},
	{
		id: "my-clients-4",
		image: "/images/clients/venture-logo.svg",
	},
	{
		id: "my-clients-5",
		image: "/images/clients/institute-logo.svg",
	},
];
