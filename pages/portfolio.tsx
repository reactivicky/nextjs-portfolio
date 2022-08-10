import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import * as S from "../styles/Portfolio.styled";

const PortfolioPage = () => {
	const [slideNumber, setSlideNumber] = useState(1);
	const [animationWidth, setAnimationWidth] = useState([0, (100 / 4) * 1]);

	const imageArray = ["1", "2", "3", "4", "5", "6"];

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
				<S.InnerSlide id="InnerSlide" animate={{ x: -(slideNumber - 1) * 277 }} transition={{ damping: 1 }} >
					{imageArray.map((el, i) => {
						return (
							<S.Slide key={i}>
								<p>{el}</p>
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
