import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
  height: 100vh;
  background-color: black;
  position: relative;
  overflow: hidden;
`;

export const MotionMain = styled(motion.main)`
  flex-grow: 1;
`
