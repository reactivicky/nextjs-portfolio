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
`

export const ModalBox = styled.div`
  height: 100%;
  background-color: black;
  padding: 1.5rem 2.5rem;
`

export const Modal = styled.div`
  background-color: #222222;
  padding: 2rem;
  border-radius: .5rem;
  height: 100%;
`