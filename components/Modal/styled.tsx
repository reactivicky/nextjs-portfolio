import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ModalContainer = styled(motion.div)`
	position: absolute;
	z-index: 2;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	color: white;
	height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto 0;
`;

export const CloseBtn = styled(motion.button)`
	position: absolute;
	top: 10px;
	right: 10px;
  border: 2px solid white;
  border-radius: 100vw;
  background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		display: block;

		path {
			stroke: white;
		}
	}
`;

export const ModalBox = styled.div`
	height: 100%;
	background-color: black;
	padding: 1.5rem 2.5rem;
`;

export const Modal = styled(motion.div)`
	background-color: #222222;
	padding: 3rem 2rem 2rem;
	border-radius: 0.5rem;
	height: 100%;
	display: flex;
	flex-direction: column;
  gap: 4rem;
  position: relative;
  overflow: auto;

	@media (min-width: 1044px) {
		flex-direction: row;
	}
`;

export const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const ImageContainer = styled.div`
	display: flex;
	justify-content: center;

	> div {
		background-color: white;
		border-radius: 100vw;
		height: 130px;
		width: 130px;
	}
`;

export const Heading = styled.h3`
	text-transform: uppercase;
	font-size: 1.1875rem;
	margin-bottom: 5px;

	@media (min-width: 1400px) {
		font-size: 2.5rem;
		margin-bottom: 15px;
	}

	span {
		color: #eb4a4c;
	}
`;

export const Description = styled.div`
	font-size: 0.9375rem;
	color: #a2a2a2;
	font-weight: 500;
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: center;
`;

export const DescriptionAnimation = styled(motion.span)`
	color: white;
`;

export const NameContainer = styled.div`
	text-align: center;
`;

export const AddressList = styled.ul`
	list-style: none;

  li:last-of-type {
    border-bottom: none;
  }
`;

export const AddressItem = styled.li`
	border-bottom: 1px solid hsla(0, 0%, 100%, 0.15);
	padding: 0.5rem 0;
	font-size: 0.8rem;
	color: #a2a2a2;
`;

export const DownloadBtn = styled(motion.button)``;

export const RightSide = styled.div`
	flex-grow: 2;
`;

export const RightSideSection = styled.section`
  > div {
    margin-top: 10px;
  }
`

export const SectionHeading = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;

  span {
    color: #eb4a4c;
  }
`

export const DescriptionText = styled.p`
  span {
    color: white;
  }
`

export const QualityServices = styled.ul`
  list-style: none;
`

export const QualityService = styled.li`
  font-size: .9rem;
  color: #a2a2a2;
  padding: .5rem 0;
	display: flex;
	align-items: center;
	gap: .5rem;
`
