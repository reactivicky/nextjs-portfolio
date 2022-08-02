import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	padding: 0 24px;
	position: relative;

	@media (min-width: 1044px) {
		padding: 0;
		gap: 4.6875rem;
		justify-content: center;
		flex-direction: row;
	}

	@media (min-width: 1400px) {
		gap: 6.25rem;
	}

	> div {
		flex: 1;
		

		@media (min-width: 1044px) {
			max-width: 22.5rem;
		}
	}
`;

export const ImageContainer = styled.div`
	border: 1px solid white;
`;

export const AboutDetails = styled.div`
	
`;

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
`

export const LearnMoreBtn = styled(motion.button)``
