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
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto 0;

	@media (min-width: 1400px) {
		height: 80vh;
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
		width: 800px;
		overflow: visible;
	}
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

	@media (min-width: 1044px) {
		right: -50px;
		padding: .3rem;
		
		svg {
			height: 25px;
			width: 25px;
		}
	}
`;

export const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	@media (min-width: 1044px) {
		flex-grow: 1;
	}
	
`;

export const ImageContainer = styled.div`
	overflow: hidden;
	border-radius: 100vw;
	height: 130px;
	width: 130px;
	margin: 0 auto;

	> span {
		transform: scale(1.3);
	}

	@media (min-width: 784px) {
		height: 300px;
		width: 300px;
	}
	
	@media (min-width: 1044px) {
		height: 130px;
		width: 130px;
	}
	
`;

export const Heading = styled.h3`
	text-transform: uppercase;
	font-size: 1.1875rem;
	margin-bottom: 5px;

	@media (min-width: 1400px) {
		font-size: 1.4rem;
		margin-bottom: 5px;
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
	display: flex;
	align-items: center;
	gap: .5rem;
`;

export const DownloadBtn = styled(motion.button)``;

export const RightSide = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	flex-basis: 480px;

	@media (min-width: 1044px) {
		overflow: auto;
		flex-grow: 2;
	}
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

export const StyledUL = styled.ul`
  list-style: none;
	margin-bottom: 1.875rem;
`

export const StyledLI = styled.li`
  font-size: .9rem;
  color: #a2a2a2;
  padding: .5rem 0;
	display: flex;
	align-items: center;
	gap: .5rem;
`

export const TimelineContainer = styled.div`
	border-left: 1px solid hsla(0,0%,100%,.15);
	padding-left: 1rem;
`

export const DateContainer = styled.p`
	background-color: hsla(0,0%,100%,.05);
	padding: .5rem 1.5rem;
	display: inline-block;
	border-radius: 100vw;
	font-size: .9rem;
	color: #a2a2a2;
	margin-bottom: 1rem;
	position: relative;

	svg {
		position: absolute;
		left: -23px;
		top: 10px;
	}
`

export const InstitutionName = styled.p`
	font-weight: 600;
	margin-bottom: .2rem;
`

export const DegreeName = styled.p`
	font-size: .9rem;
	color: #a2a2a2;
	margin-bottom: 3rem;
`

export const ExtraMarginDivider = styled.div`
	margin-bottom: 3rem;
`
