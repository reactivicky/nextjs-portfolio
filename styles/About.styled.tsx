import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	padding: 0 24px;
	position: relative;
	margin: 2vh 0;

	@media (min-width: 1044px) {
		padding: 0;
		gap: 4.6875rem;
		justify-content: center;
		flex-direction: row;

		> div {
			max-width: 22.5rem;
			flex: 1;
		}
	}

	@media (min-width: 1400px) {
		gap: 6.25rem;
	}
`;

export const ImageContainer = styled.div`
	border-radius: 0.5rem;
	height: 300px;
	overflow: hidden;
	position: relative;

	> span {
		position: absolute;
		top: -20px;
		transform: scale(1.2);
	}

	@media (min-width: 500px) {
		width: 500px;
		margin: auto;
	}

	@media (min-width: 1044px) {
		height: 360px;
		width: auto;
	}
`;

export const AboutDetails = styled.div``;

export const Heading = styled.h3`
	text-transform: uppercase;
	font-size: 2rem;
	margin-bottom: 12px;

	@media (min-width: 1400px) {
		font-size: 2.5rem;
		margin-bottom: 15px;
	}

	span {
		color: #eb4a4c;
	}
`;

export const Description = styled.div`
	font-size: 1.125rem;
	color: #a2a2a2;
	font-weight: 500;
	display: flex;
	gap: 0.5rem;
	align-items: center;
`;

export const DescriptionAnimation = styled(motion.span)`
	color: white;
`;

export const DescriptionText = styled.p`
	span {
		color: white;
	}
`;

export const LearnMoreBtn = styled(motion.button)``;
