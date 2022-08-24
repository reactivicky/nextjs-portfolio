import { useState } from "react";
import VisxCharts from "../public/visx-charts.png";
import NotesApp from "../public/notes-app.png";
import TodoApp from "../public/todo-app.png";
import TaskManager from "../public/indecision-app.png";
import LandingPage from "../public/landing-page.png";
import TutorMatch from "../public/tutor-match.png";
import * as S from "../styles/Portfolio.styled";
import Image from "next/image";

const PortfolioPage = () => {
	const [hoveredSlide, setHoveredSlide] = useState<null | number>(null);

	const handleSlideHover = (slideId: number) => {
		setHoveredSlide(slideId);
	};

	const handleSlideLeave = () => {
		setHoveredSlide(null);
	};

	const imageArray = [
		{
			src: VisxCharts,
			id: 1,
			alt: "Visx Charts",
			link: "https://visx-charts-reactivicky.vercel.app/",
		},
		{
			src: NotesApp,
			id: 2,
			alt: "Notes App",
			link: "https://notes-app-vickysonata.netlify.app/",
		},
		{
			src: TodoApp,
			id: 3,
			alt: "Todo App",
			link: "https://todo-app-vickysonata.netlify.app/",
		},
		{
			src: TaskManager,
			id: 4,
			alt: "Task Manager",
			link: "https://indecision-app-vickysonata.netlify.app/",
		},
		{
			src: LandingPage,
			id: 5,
			alt: "Landing Page",
			link: "https://landing-page-reactivicky.vercel.app/",
		},
		{
			src: TutorMatch,
			id: 6,
			alt: "Tutor Match",
			link: "https://blog-reactivicky.vercel.app/",
		},
	];

	return (
		<S.Container
			className="container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<S.Heading>
				Creative <span>Portfolio</span>
			</S.Heading>
			<S.Divider className="divider" />

			<S.SliderContainer id="SliderContainer">
				<S.InnerSlide id="InnerSlide">
					{imageArray.map((image) => {
						return (
							<S.Slide key={image.id}>
								<S.ImageContainer
									target="_blank"
									href={image.link}
									rel="noopener noreferrer"
									onMouseEnter={() => handleSlideHover(image.id)}
									onMouseLeave={handleSlideLeave}
								>
									<Image src={image.src} alt={image.alt} />
								</S.ImageContainer>
								<S.ImageName
									animate={{ y: hoveredSlide === image.id ? 0 : 100 }}
									transition={{ damping: 1 }}
								>
									{image.alt}
								</S.ImageName>
							</S.Slide>
						);
					})}
				</S.InnerSlide>
			</S.SliderContainer>
		</S.Container>
	);
};

export default PortfolioPage;
