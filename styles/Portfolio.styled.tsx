import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
	margin: 2rem 0;
	padding: 1.5rem;

	@media (min-width: 1044px) {
		margin: 15vh auto;
		padding: 0;
	}
`;

export const Divider = styled.div`
	margin: 1rem 0 3rem 0;
`;

export const Heading = styled.h1`
	font-size: 1.6rem;

	@media (min-width: 1044px) {
		font-size: 1.9rem;
	}

	span {
		color: #eb4a4c;
	}
`;

export const SliderContainer = styled(motion.div)`
	margin-bottom: 2rem;
	overflow: scroll;
  overflow-y: hidden;
	padding-bottom: 1rem;

	::-webkit-scrollbar {
		width: 14px;
	}

	::-webkit-scrollbar-thumb {
		border: 4px solid rgba(0, 0, 0, 0);
		background-clip: padding-box;
		border-radius: 9999px;
		background-color: #ffffff;
	}
`;

export const InnerSlide = styled(motion.div)`
	display: flex;
	gap: 2rem;
`;

export const Slide = styled.div`
	cursor: pointer;
	position: relative;
	overflow: hidden;
	height: 300px;
	min-width: 245px;

	@media (min-width: 1044px) {
		min-width: 245px;
	}
`;

export const ImageContainer = styled(motion.a)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	background-color: white;
	overflow: hidden;
	border-radius: 0.8rem;
`;

export const ImageName = styled(motion.span)`
	position: absolute;
	z-index: 1;
	height: 50px;
	bottom: 0;
	right: 0;
	left: 0;
	background-color: black;
	color: white;
	font-size: 0.9rem;
	font-weight: 600;
	padding: 0.5rem 1rem;
`;
