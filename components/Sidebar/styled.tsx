import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	width: 300px;
	z-index: 10;
	padding: 6rem 2rem;
	background-color: black;

	@media (min-width: 1000px) {
		display: none;
	}
`;

export const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	gap: 3rem;
`;
