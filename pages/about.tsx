import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { AnimatePresence } from "framer-motion";
import {
	Container,
	ImageContainer,
	AboutDetails,
	Heading,
	Description,
	DescriptionAnimation,
	DescriptionText,
	LearnMoreBtn,
} from "../styles/About.styled";
import { open } from '../app/ModalSlice'
import { HeadComponent } from "../components";
import Hero from '../public/hero.jpg'
import Image from "next/image";

const AboutPage = () => {
	const [word, setWord] = useState<string>("Web");
	const dispatch = useDispatch()

	useEffect(() => {
		const timer = setInterval(() => {
			setWord((prevState) => {
				if (prevState === "Web") {
					return "React";
				}
				return "Web";
			});
		}, 2500);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<Container
			className="container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			style={{ color: "white" }}
		>
			<HeadComponent />
			<ImageContainer>
				<Image src={Hero} alt="hero" />
			</ImageContainer>
			<AboutDetails>
				<Heading>
					Vignesh <span>Kumar</span>
				</Heading>
				<Description>
					<AnimatePresence exitBeforeEnter>
						<DescriptionAnimation
							key={word}
							initial={{ y: 10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -10, opacity: 0 }}
						>
							{word}
						</DescriptionAnimation>
					</AnimatePresence>
					<span>Developer</span>
				</Description>
				<div className="divider" />

				<DescriptionText className="descriptionText">
					My name is <span>Vignesh Kumar L</span>. I am a Front End Developer,
					and I&apos;m very passionate and dedicated to my work. With 7+ years
					experience as a professional a Web Developer, I have acquired my
					skills and knowledge.
				</DescriptionText>

				<LearnMoreBtn
					className="redBtn"
					whileTap={{ scale: 0.8 }}
					whileHover={{
						color: "black",
						backgroundColor: "white",
						outline: "1px solid #eb4a4c",
					}}
					onClick={() => dispatch(open())}
				>
					Learn More
				</LearnMoreBtn>
			</AboutDetails>
		</Container>
	);
};

export default AboutPage;
