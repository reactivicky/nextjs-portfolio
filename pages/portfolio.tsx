import { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import VisxCharts from "../public/visx-charts.png";
import NotesApp from "../public/notes-app.png";
import TodoApp from "../public/todo-app.png";
import TaskManager from "../public/indecision-app.png";
import LandingPage from "../public/landing-page.png";
import TutorMatch from "../public/tutor-match.png";
import * as S from "../styles/Portfolio.styled";
import Image from "next/image";

const PortfolioPage = () => {
	const [slideNumber, setSlideNumber] = useState(1);
	const [animationWidth, setAnimationWidth] = useState([0, (100 / 4) * 1]);
	const [hoveredSlide, setHoveredSlide] = useState<null | number>(null);

	const handleSlideHover = (slideId: number) => {
		setHoveredSlide(slideId);
	};

	const handleSlideLeave = (slideId: number) => {
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

	const onSlideBtnClick = (operation: string) => {
		setSlideNumber((prevState) => {
			if (operation === "decrease" && prevState !== 1) {
				setAnimationWidth([(100 / 4) * prevState, (100 / 4) * (prevState - 1)]);
				return --prevState;
			}
			if (operation === "increase" && prevState !== 4) {
				setAnimationWidth([(100 / 4) * prevState, (100 / 4) * (prevState + 1)]);
				return ++prevState;
			}
			return prevState;
		});
	};

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
				<S.InnerSlide
					id="InnerSlide"
					animate={{ x: -(slideNumber - 1) * 277 }}
					transition={{ damping: 1 }}
				>
					{imageArray.map((image) => {
						return (
							<S.Slide key={image.id}>
								<S.ImageContainer
									target="_blank"
									href={image.link}
									rel="noopener noreferrer"
									onMouseEnter={() => handleSlideHover(image.id)}
									onMouseLeave={() => handleSlideLeave(image.id)}
								>
									<Image src={image.src} alt={image.alt} />
								</S.ImageContainer>
								<S.ImageName
									animate={{ y: hoveredSlide === image.id ? 0 : 100 }}
									transition={{damping: 1}}
								>
									{image.alt}
								</S.ImageName>
							</S.Slide>
						);
					})}
				</S.InnerSlide>
			</S.SliderContainer>

			<S.Legend>
				<S.ProgressBar>
					<S.SlideNumber>0{slideNumber}</S.SlideNumber>
					<S.ProgressContainer>
						<S.Progress
							animate={{
								width: animationWidth,
							}}
							transition={{ duration: 0.2 }}
						/>
					</S.ProgressContainer>
					<S.SlideNumber>04</S.SlideNumber>
				</S.ProgressBar>

				<S.BtnContainer>
					<button onClick={() => onSlideBtnClick("decrease")}>
						<FiChevronLeft size={20} />
					</button>
					<button onClick={() => onSlideBtnClick("increase")}>
						<FiChevronRight size={20} />
					</button>
				</S.BtnContainer>
			</S.Legend>
		</S.Container>
	);
};

export default PortfolioPage;
