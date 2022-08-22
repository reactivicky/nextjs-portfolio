import { ReactNode, FC, useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { ISourceOptions } from "tsparticles-engine";
import { AnimatePresence } from "framer-motion";
import Modal from "../Modal/Modal";
import Navbar from "../Navbar/Navbar";
import { Container, MotionMain } from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import particlesOptions from "./particles.json";

interface LayoutProps {
	children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	const showModal = useSelector(
		(state: RootState) => state.modalState.modalOpen
	);

	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);

	return (
		<>
			<Container>
				<AnimatePresence exitBeforeEnter>
					{showModal ? (
						<Modal key="modal" />
					) : (
						<div key="others">
							<Navbar />
							<MotionMain
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								{children}
							</MotionMain>
						</div>
					)}
				</AnimatePresence>
			</Container>
			<Particles
				options={particlesOptions as ISourceOptions}
				init={particlesInit}
			/>
		</>
	);
};

export default Layout;
