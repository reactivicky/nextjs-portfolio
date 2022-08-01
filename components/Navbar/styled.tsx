import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.nav)`
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem;

	@media (min-width: 1044px) {
		width: 60%;
		margin: auto;
		padding: 2.5rem 0;
	}
`;

export const NavList = styled.ul`
	display: none;

	@media (min-width: 1044px) {
		display: flex;
		list-style: none;
		gap: 3rem;
	}
`;

export const NavItem = styled(motion.li)`
	cursor: pointer;
	font-weight: 500;
`;

export const NavToggle = styled(motion.button)`
	position: relative;
	z-index: 20;
	border-radius: 100vw;
	background-color: transparent;

	svg {
		display: block;
		position: absolute;
		top: -10px;
		left: 0;
	}

	@media (min-width: 1044px) {
		display: none;
	}
`;
